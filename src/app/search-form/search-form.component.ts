import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { searchTargetColumns } from '../classes/search-target-columns';

/** 映画の始まりの年 : 世界初の映画は 1895 年とされているので 1890 を開始年にする */
const startAge: number = 1890;

/** 「検索フォーム」コンポーネント */
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  /** フォーム部品を非活性にするためのインプット */
  @Input() public isDisabled: boolean = false;
  
  /** 「検索」「Reload」ボタン押下時のイベント */
  @Output() public onSubmit: EventEmitter<{ targetColumn: string; searchText: string; }> = new EventEmitter();
  
  /** 検索フォーム */
  public searchForm: FormGroup;
  
  /** 「検索条件」セレクトボックス定義 */
  public searchTargetColumns: Array<{ name: string; value: string; }> = Object.entries(searchTargetColumns).map((keyValuePair: [string, { key: string; name: string; }]) => ({ name: keyValuePair[1].name, value: keyValuePair[1].key }));
  
  /** 「公開年代」セレクトボックス定義 */
  public searchPublishedAges: Array<{ age: number; }> = this.createSearchPublishedAges();
  
  constructor(private formBuilder: FormBuilder) { }
  
  /** 画面初期表示時 */
  public ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      targetColumn: [searchTargetColumns.title.key, [Validators.required]],  // 検索条件の初期値は「タイトル」検索にする
      searchText  : [''],  // 空値の場合は全件検索とするので Required にしない
      publishedAge: ['']   // select 要素のデフォルト選択を管理するためのモノ・値は searchText に同期して管理する
    });
  }
  
  /** 「検索条件」セレクトボックス変更時 : 「公開年代」セレクトボックスとの調整を行う */
  public onChangeSearchTargetColumn(): void {
    // 「公開年代」以外に変更した場合は検索文字列を空にする
    if(this.searchForm.value.targetColumn !== searchTargetColumns.publishedAge.key) return this.searchForm.controls.searchText.reset();
    
    // 「公開年代」を選択した場合は初期値を現在年代にする
    const currentAge = this.searchPublishedAges[this.searchPublishedAges.length - 2].age;
    this.searchForm.controls.searchText.setValue(currentAge);
    this.searchForm.controls.publishedAge.setValue(currentAge);
  }
  
  /** 「公開年代」セレクトボックス変更時 : 「検索文字列」に値を同期する */
  public onChangeSearchPublishedAge(): void {
    this.searchForm.controls.searchText.setValue(this.searchForm.value.publishedAge);
  }
  
  /**
   * 「検索条件」で「公開年」を選択している場合に「検索文字列」が正常値か否か : 「検索」ボタンの活性状態を制御する
   * 
   * @return 異常値なら true とし「検索」ボタンを非活性にする・正常値なら false とし「検索」ボタンを活性にする
   */
  public isInvalidPublishedYear(): boolean {
    if(this.searchForm.value.targetColumn !== searchTargetColumns.publishedYear.key) return false;  // 「公開年」以外の検索条件のときは活性にする
    const searchText = this.trimValue(this.searchForm.value.searchText);
    if(!searchText) return false;  // 空値は活性にする
    const searchTextNumber = Number(searchText);
    if(!Number.isInteger(searchTextNumber)) return true;  // 値が入っている場合は整数でなければ非活性にする
    return searchTextNumber < startAge || searchTextNumber > 2100;  // 映画の始まりの年以前、自分が死んでそうな未来の値は非活性にする
  }
  
  /** 「検索」ボタン押下時 : 指定条件での検索を求める */
  public onSearch(): void {
    const targetColumn = this.trimValue(this.searchForm.value.targetColumn);
    const searchText   = this.trimValue(this.searchForm.value.searchText);
    const searchParams = searchText ? { targetColumn, searchText } : undefined;  // 検索文字列がある時だけ値を渡す
    this.onSubmit.emit(searchParams);
  }
  
  /** 「Reload」ボタン押下時 : フォームをリセットして全件取得を求める */
  public onReload(): void {
    this.searchForm.reset({ targetColumn: searchTargetColumns.title.key });
    this.onSubmit.emit();
  }
  
  /**
   * 1890・1990 … 2020・2030 といった年代の配列を作る
   * 
   * @return 年代の配列 (現在年を含む年代の、次の10年代までを含める)
   */
   private createSearchPublishedAges(): Array<{ age: number; }> {
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
   * 値を文字列として Trim する
   * 
   * @param value 値
   * @return 文字列化して Trim した値
   */
  private trimValue(value: string | number | null): string {
    return value == null ? '' : String(value).trim();
  }
}
