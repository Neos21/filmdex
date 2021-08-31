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
  
  /** 検索フォーム */
  public searchForm: FormGroup;
  
  /** 検索対象カラム定義 */  // TODO : サーバサイドと共有資産にする
  public searchTargetColumns: Array<{ name: string; value: string; }> = [
    { name: '公開年'  , value: 'published_year' },  // 1年指定
    { name: '公開年代', value: 'published_age'  },  // 10年区切りの年代 (00～09 年)
    { name: 'タイトル', value: 'title'          },  // 原題・邦題両方を対象に部分一致
    { name: 'キャスト', value: 'cast'           },  // キャスト名の完全一致
    { name: 'スタッフ', value: 'staff'          },  // スタッフ名の完全一致
    { name: 'タグ'    , value: 'tag'            },  // タグ名の完全一致
  ];
  
  /** 公開年代定義 */
  public searchPublishedAges: Array<{ age: number; }> = this.createSearchPublishedAges();
  
  /** 初回読込中か否か */
  public isLoading: boolean = true;
  
  /** API 通信中か否か */
  public isSubmitting: boolean = false;
  
  /** 検索結果を表示しているか否か (false なら全件表示) */
  public isSearch: boolean = false;
  
  /** 「登録」ボタンの押下による API 通信か否か (false なら更新時) */
  public isCreate: boolean = false;
  
  /** メタ情報を編集中の映画情報・編集中でなければ null */
  public editingFilm: Film | null = null;
  
  /** 削除確認中の映画情報・削除確認中でなければ null */
  public removingFilm: Film | null = null;
  
  /** エラーメッセージ */
  public errorMessage: string = '';
  
  constructor(private formBuilder: FormBuilder, private apiFilmsService: ApiFilmsService) { }
  
  /** 画面初期表示時 */
  public async ngOnInit(): Promise<void> {
    await this.onLoad();
  }
  
  /** 初期表示時および「Reload」ボタン押下時 : 映画情報を読み込む */
  public async onLoad(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      this.isSearch = false;
      const films = await this.apiFilmsService.findAll();
      this.filmsForm = this.formBuilder.group({
        films: this.formBuilder.array(films.map(film => this.createFormGroup(film))),
        newFilm: this.createFormGroup()
      });
      
      this.searchForm = this.formBuilder.group({
        targetColumn: ['title', [Validators.required]],
        searchText  : [''],  // 空値の場合は全件検索とする
        publishedAge: ['']   // select 要素のデフォルト選択を管理するためのモノ・値は searchText に同期して管理する
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
  
  /** 「検索条件」セレクトボックス変更時 */
  public onChangeSearchTargetColumn(): void {
    // 「公開年代」以外に変更した場合は検索文字列を空にする
    if(this.searchForm.value.targetColumn !== 'published_age') {
      this.searchForm.controls.searchText.reset();
      return;
    }
    
    // 「公開年代」を選択した場合は初期値を現在年代にする
    const currentAge = this.searchPublishedAges[this.searchPublishedAges.length - 2].age;
    this.searchForm.controls.searchText.setValue(currentAge);
    this.searchForm.controls.publishedAge.setValue(currentAge);
  }
  
  /** 「公開年代」セレクトボックス変更時 : 「検索文字列」に値を同期する */
  public onChangeSearchPublishedAge(): void {
    this.searchForm.controls.searchText.setValue(this.searchForm.value.publishedAge);
  }
  
  /** 「検索条件」で「公開年」を選択している場合は「検索文字列」が空値か整数4桁でないと「検索」ボタンを押下できないようにする */
  public isInvalidPublishedYear(): boolean {
    if(this.searchForm.value.targetColumn !== 'published_year') return false;
    const searchText = this.forceTrim(this.searchForm.value.searchText);
    if(!searchText) return false;
    return !(/^\d{4}$/u).test(searchText);
  }
  
  /** 「検索」ボタン押下時 */
  public async onSearch(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      const targetColumn = this.searchForm.value.targetColumn;
      const searchText   = this.forceTrim(this.searchForm.value.searchText);
      
      this.isSearch = searchText !== '';  // 「検索文字列」が空なら全件取得にする
      const films = this.isSearch ? await this.apiFilmsService.search(targetColumn, searchText) : await this.apiFilmsService.findAll();
      this.filmsForm = this.formBuilder.group({
        films: this.formBuilder.array(films.map(film => this.createFormGroup(film))),
        newFilm: this.createFormGroup()
      });
    }
    catch(error) {
      console.error('Home Component : On Search', error);
      this.errorMessage = 'Failed To Search Films';
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
    
    this.isCreate = true;
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
      this.isCreate = false;
    }
  }
  
  /** 「詳細」ボタン押下時 : メタ情報の編集開始 */
  public onStartEditMeta(filmFormGroup: AbstractControl): void {
    const film = new Film(filmFormGroup.value);
    if(this.editingFilm != null) return console.warn('Home Component : On Start Edit Meta : Aborted', { editingFilm: this.editingFilm, film: film });
    this.editingFilm = film;
  }
  
  /** メタ情報の編集終了時 */
  public onEndEditMeta(): void {
    this.editingFilm = null;
  }
  
  /** 「削除」ボタン押下時 : 削除確認モーダルを開く */
  public onStartRemove(filmFormGroup: AbstractControl): void {
    const film = new Film(filmFormGroup.value);
    if(this.removingFilm != null) return console.warn('Home Component : On Start Remove : Aborted', { removingFilm: this.removingFilm, film: film });
    this.errorMessage = '';
    this.removingFilm = film;
  }
  
  /** モーダルの「削除」ボタン押下時 */
  public async onRemove(): Promise<void> {
    if(this.removingFilm == null) return console.warn('Home Component : On Remove : Aborted');  // 削除対象がないので異常事態
    
    this.errorMessage = '';
    let isSucceeded = false;
    try {
      const filmId = this.removingFilm.id;
      await this.apiFilmsService.remove(filmId);
      
      isSucceeded = true;
    }
    catch(error) {
      console.error('Home Component : On Remove', error);
      this.errorMessage = 'Failed To Remove';
    }
    finally {
      if(isSucceeded) {  // 削除成功後・モーダルを閉じて初期表示状態に戻す
        this.removingFilm = null;
        await this.onLoad();
      }
    }
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
  
  /**
   * 1890・1990 … 2020・2030 といった年代の配列を作る
   * 
   * @return 年代の配列 (現在年を含む年代の、次の10年代までを含める)
   */
  private createSearchPublishedAges(): Array<{ age: number; }> {
    const startAge = 1890;  // 世界初の映画は 1895 年とされているので 1890 を開始年代にする
    const nowAge = Number(`${new Date().getFullYear()}`.substr(0, 3) + '0');  // 現在年から 2020 のような年代の値を作る
    const nextAge = nowAge + 10;  // 次の10年代
    const ages = [];
    
    let currentAge = startAge;
    while(currentAge <= nextAge) {
      ages.push({ age: currentAge });
      currentAge += 10;
    }
    return ages;
  }
  
  /**
   * どんな値も安全にトリムする
   * 
   * @param value 値
   * @return 文字列化してトリムした値
   */
  private forceTrim(value: string | number | null): string {
    if(value == null) return '';
    return String(value).trim();
  }
}
