import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Film } from '../../../../../server/src/entities/film';

import { AuthGuard } from '../guards/auth.guard';

import { AdminApiFilmsService } from '../services/admin-api-films.service';

/** 「管理用 映画情報一覧」画面 */
@Component({
  selector: 'app-admin-films',
  templateUrl: './admin-films.component.html',
  styleUrls: ['./admin-films.component.scss']
})
export class AdminFilmsComponent implements OnInit {
  /** 映画情報フォーム */
  public filmsForm: FormGroup;
  
  /** 現在の状態 : loading・loaded・searching・searched・''・creating・updating・modal・exporting */
  public currentState: string = 'loading';
  
  /** エラーメッセージ */
  public errorMessage: string = '';
  
  /** メタ情報を編集中の映画情報・編集中でなければ null */
  public editingFilm: Film | null = null;
  
  /** 削除確認中の映画情報・削除確認中でなければ null */
  public removingFilm: Film | null = null;
  
  /** 最後に検索した条件 */
  private lastFindParams: { targetColumn: string; searchText: string; } | undefined = undefined;
  
  constructor(private formBuilder: FormBuilder, private authGuard: AuthGuard, private adminApiFilmsService: AdminApiFilmsService) { }
  
  /** 画面初期表示時 */
  public async ngOnInit(): Promise<void> {
    await this.onSearch();
  }
  
  /**
   * 画面初期表示時・および子コンポーネントの「検索」「Reload」ボタン押下時 : 映画情報を複数取得する
   * 
   * @param findParams 検索条件・未指定の場合は undefined となり全件取得になる
   */
  public async onSearch(findParams?: { targetColumn: string; searchText: string; }): Promise<void> {
    this.currentState = findParams ? 'searching' : 'loading';
    this.errorMessage = '';
    try {
      const films = await this.adminApiFilmsService.find(findParams?.targetColumn, findParams?.searchText);
      this.filmsForm = this.formBuilder.group({
        films: this.formBuilder.array(films.map(film => this.createFormGroup(film))),
        newFilm: this.createFormGroup()
      });
    }
    catch(error) {
      console.error('Admin Films Component : On Search', error);
      this.errorMessage = 'Failed To Search Films';
    }
    finally {
      this.currentState = findParams ? 'searched' : 'loaded';
      this.lastFindParams = findParams;
    }
  }
  
  /**
   * 「更新」ボタン押下時・もしくはテキストボックスからフォーカスアウトした時 : 映画情報を更新する
   * 
   * @param filmFormGroup 更新する映画情報
   */
  public async onUpdate(filmFormGroup: AbstractControl): Promise<void> {
    if(filmFormGroup.pristine || filmFormGroup.invalid || ['creating', 'updating', 'exporting'].includes(this.currentState)) return;  // 未編集・バリデーションエラー時、画面操作中は何もしない
    
    this.currentState = 'updating';
    this.errorMessage = '';
    try {
      // API 通信前に変更が入っている項目を取得しておく (API 通信中に変更が入った項目は編集状態のままにするため)
      const updatedColumns = Object.values((filmFormGroup as FormGroup).controls).filter((formControl) => formControl.dirty);
      // 更新する
      await this.adminApiFilmsService.save(new Film(filmFormGroup.value));
      // 変更が入っていた項目を未編集状態に戻す
      updatedColumns.forEach((formControl) => {
        formControl.markAsUntouched();
        formControl.markAsPristine();
      });
    }
    catch(error) {
      console.error('Admin Films Component : On Update', error);
      this.errorMessage = 'Failed To Update';
    }
    finally {
      this.currentState = '';
    }
  }
  
  /** 「登録」ボタン押下時 : 映画情報を登録する */
  public async onCreate(): Promise<void> {
    if(['creating', 'updating', 'exporting'].includes(this.currentState)) return;  // 画面操作中は何もしない
    
    this.currentState = 'creating';
    this.errorMessage = '';
    try {
      const filmFormGroup: FormGroup = this.filmsForm.get('newFilm') as FormGroup;
      const createdFilm = await this.adminApiFilmsService.create(new Film(filmFormGroup.value));
      this.films.push(this.createFormGroup(createdFilm));
      filmFormGroup.reset();
    }
    catch(error) {
      console.error('Admin Films Component : On Create', error);
      this.errorMessage = 'Failed To Create';
    }
    finally {
      this.currentState = '';
    }
  }
  
  /**
   * 「詳細」ボタン押下時 : 「映画メタ情報編集」モーダルを開く
   * 
   * @param filmFormGroup 編集する映画情報
   */
  public onStartEditMeta(filmFormGroup: AbstractControl): void {
    if(this.editingFilm != null) return;
    this.editingFilm = new Film(filmFormGroup.value);
    this.currentState = 'modal';
  }
  
  /** 「映画メタ情報編集」モーダルを閉じる */
  public onEndEditMeta(): void {
    this.editingFilm = null;
    this.currentState = '';
  }
  
  /**
   * 「削除」ボタン押下時 : 「映画情報削除確認」モーダルを開く
   * 
   * @param filmFormGroup 削除する映画情報
   */
  public onStartRemove(filmFormGroup: AbstractControl): void {
    if(this.removingFilm != null) return;
    this.removingFilm = new Film(filmFormGroup.value);
    this.currentState = 'modal';
  }
  
  /** 「映画情報削除確認」モーダルを閉じる */
  public async onEndRemove(isRemoved: boolean): Promise<void> {
    this.removingFilm = null;
    this.currentState = '';
    if(isRemoved) await this.onSearch(this.lastFindParams);  // 削除した場合は直前の検索条件で再取得する
  }
  
  /**
   * 現在の状態を基にフォーム部品を非活性にするか否か判定する
   * 
   * @return 非活性にする場合は true
   */
  public isDisabled(): boolean {
    return ['loading', 'searching', 'creating', 'updating', 'exporting'].includes(this.currentState);
  }
  
  /** 映画情報の SQLite DB ファイルを JSON ファイルにエクスポートする */
  public async onExportToJson(): Promise<void> {
    this.currentState = 'exporting';
    this.errorMessage = '';
    try {
      const result = await this.adminApiFilmsService.exportToJson();
      console.log('Admin Films Component : On Export To JSON', result);
      if(result.error) throw result.error;
    }
    catch(error) {
      console.error('Admin Films Component : On Export To JSON', error);
      this.errorMessage = 'Failed To Export To JSON';
    }
    finally {
      this.currentState = '';
    }
  }
  
  /** 「Logout」ボタン押下時 : ログアウトする */
  public onLogout(): void {
    return this.authGuard.logout(true);
  }
  
  public get films(): FormArray { return this.filmsForm.get('films') as FormArray; }
  
  /**
   * 映画情報のオブジェクトから FormGroup を生成する
   * 
   * @param film 映画情報・未指定の場合は全項目を空で作る
   * @return FormGroup
   */
  private createFormGroup(film?: Film): FormGroup {
    return this.formBuilder.group({
      id           : [film?.id            ?? null],  // ID を作っておかないと更新時に ID が取得できなくなる・input[type="hidden"] は用意しなくても大丈夫・空文字だと datatype mismatch エラーが発生する
      publishedYear: [film?.publishedYear ?? '', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[1-9][0-9]{3}$')]],
      title        : [film?.title         ?? '', [Validators.required]],
      japaneseTitle: [film?.japaneseTitle ?? ''],
      scenario     : [film?.scenario      ?? ''],
      review       : [film?.review        ?? '']  // createdAt・updatedAt は Form で扱わなくても正しく管理される
    });
  }
}
