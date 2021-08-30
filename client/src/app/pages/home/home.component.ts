import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Film } from '../../../../../server/src/entities/film';

import { ApiFilmsService } from './services/api-films.service';

/** 「ホーム」画面 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /** 映画情報フォーム */
  public filmsForm: FormGroup;
  
  /** 初回読込中か否か */
  public isLoading: boolean = true;
  
  /** API 通信中か否か */
  public isSubmitting: boolean = false;
  
  /** メタ情報を編集中の ID・編集中でなければ null */
  public editingFilmId: number | null = null;
  
  /** エラーメッセージ */
  public errorMessage: string = '';
  
  constructor(private formBuilder: FormBuilder, private apiFilmsService: ApiFilmsService) { }
  
  /** 画面初期表示時 */
  public async ngOnInit(): Promise<void> {
    await this.onLoad();
  }
  
  /** 「Reload」ボタン押下時 : 映画情報を読み込む */
  public async onLoad(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      const films = await this.apiFilmsService.findAll();
      this.filmsForm = this.formBuilder.group({
        films: this.formBuilder.array(films.map(film => this.createFormGroup(film))),
        newFilm: this.createFormGroup()
      });
    }
    catch(error) {
      console.error('Home Component : On Init', error);
      this.errorMessage = 'Failed To Fetch Films';
    }
    finally {
      this.isLoading = false;
    }
  }
  
  /** 「更新」ボタン押下時・もしくはテキストボックスからフォーカスアウトした時 */
  public async onUpdate(filmFormGroup: AbstractControl): Promise<void> {
    // 未編集・バリデーションエラー時、API 通信中は何もしない
    if(filmFormGroup.pristine || filmFormGroup.invalid || this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.errorMessage = '';
    try {
      // API 通信前に変更が入っている項目を取得しておく (API 通信中に変更が入った項目は編集状態のままにするため)
      const updatedColumns = Object.values((filmFormGroup as FormGroup).controls).filter((formControl) => formControl.dirty);
      
      // 更新する
      const film = new Film(filmFormGroup.value);
      await this.apiFilmsService.save(film);
      
      // 変更が入っていた項目を未編集状態に戻す
      updatedColumns.forEach((formControl) => {
        formControl.markAsUntouched();
        formControl.markAsPristine();
      });
    }
    catch(error) {
      console.error('Home Component : On Update', error);
      this.errorMessage = 'Failed To Update';
    }
    finally {
      this.isSubmitting = false;
    }
  }
  
  /** 「登録」ボタン押下時 */
  public async onCreate(): Promise<void> {
    if(this.isSubmitting) return;  // API 通信中は何もしない
    
    this.isSubmitting = true;
    this.errorMessage = '';
    try {
      const filmFormGroup: FormGroup = this.filmsForm.get('newFilm') as FormGroup;
      const film = new Film(filmFormGroup.value);
      const createdFilm = await this.apiFilmsService.create(film);
      const createdFilmFormGroup = this.createFormGroup(createdFilm);
      this.films.push(createdFilmFormGroup);
      filmFormGroup.reset();
    }
    catch(error) {
      console.error('Home Component : On Create', error);
      this.errorMessage = 'Failed To Create';
    }
    finally {
      this.isSubmitting = false;
    }
  }
  
  /** 「詳細」ボタン押下時 : メタ情報の編集開始 */
  public onStartEditMeta(filmFormGroup: AbstractControl): void {
    const filmId = filmFormGroup.value.id;
    if(this.editingFilmId != null) return console.warn('Home Component : On Start Edit Meta : Aborted', { editingFilmId: this.editingFilmId, filmId: filmId });
    this.editingFilmId = filmId;
  }
  
  /** メタ情報の編集終了時 */
  public onEndEditMeta(): void {
    this.editingFilmId = null;
  }
  
  /** formArrayName 属性解決のための Getter */
  public get films(): FormArray {
    return this.filmsForm.get('films') as FormArray;
  }
  
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
