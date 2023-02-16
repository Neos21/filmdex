import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film } from './film';
import { searchTargetColumns } from '../classes/search-target-columns';

/** 「映画一覧」画面 */
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  /** 映画情報一覧 */
  public films: Array<Film> = [];
  
  /** 全ての映画情報一覧を正常に読み込めたか否か・初回は null */
  public isLoadedAllFilms: boolean | null = null;
  
  /** 現在の状態 : loading・loaded・searching・searched・'' */
  public currentState: string = 'loading';
  
  /** 全ての映画情報一覧 */
  public allFilms: Array<Film> = [];
  
  constructor(private httpClient: HttpClient) { }
  
  /** 画面初期表示時 */
  public async ngOnInit(): Promise<void> {
    await this.onSearch();
  }
  
  /**
   * 画面初期表示時・および子コンポーネントの「検索」「Reload」ボタン押下時 : 映画情報を複数取得する
   * 
   * @param searchParams 検索条件・未指定の場合は undefined となり全件取得になる
   */
  public async onSearch(searchParams?: { targetColumn: string; searchText: string; }): Promise<void> {
    this.currentState = searchParams ? 'searching' : 'loading';
    
    // 初回の未読込時・読込失敗後のリトライ時は、先に JSON を取得する
    if(!this.isLoadedAllFilms) {
      try {
        // 本コンポーネントが '/' で開かれることを前提に相対パスで記述する
        this.allFilms = await this.httpClient.get<Array<Film>>('./assets/filmdex.json').toPromise();
        this.isLoadedAllFilms = true;
      }
      catch(error) {
        console.error('Films Component : On Search : Load JSON', error);
        this.isLoadedAllFilms = false;
        this.films = [];  // エラーメッセージを表示させる
        this.currentState = searchParams ? 'searched' : 'loaded';
        return;
      }
    }
    
    // 中身は同期処理だが時間がかかった時にボタン類を非活性にするため setTimeout で遅延させる
    setTimeout(() => {
      this.films = searchParams ? this.search(searchParams.targetColumn, searchParams.searchText) : this.allFilms;
      this.currentState = searchParams ? 'searched' : 'loaded';
    });
  }
  
  /**
   * 現在の状態を基にフォーム部品を非活性にするか否か判定する
   * 
   * @return 非活性にする場合は true
   */
  public isDisabled(): boolean {
    return ['loading', 'searching'].includes(this.currentState);
  }
  
  /**
   * 映画情報を検索する
   * 
   * @param targetColumn Trim 済の検索対象カラム
   * @param searchText Trim 済の検索文字列
   * @return 映画情報の配列
   */
  private search(targetColumn: string, searchText: string): Array<Film> {
    if(targetColumn === searchTargetColumns.publishedYear.key) {
      const publishedYear = Number(searchText);
      return this.allFilms.filter((film) => film.publishedYear === publishedYear);
    }
    if(targetColumn === searchTargetColumns.publishedAge.key) {
      const startYear = Number(searchText);
      const endYear   = startYear + 9;
      return this.allFilms.filter((film) => film.publishedYear >= startYear && film.publishedYear <= endYear);
    }
    if(targetColumn === searchTargetColumns.title.key) {
      const lowerSearchText = searchText.toLowerCase();
      return this.allFilms.filter((film) => film.title.toLowerCase().includes(lowerSearchText) || film.japaneseTitle.toLowerCase().includes(lowerSearchText));
    }
    // キャスト・スタッフ・タグ情報のいずれか
    if([searchTargetColumns.casts.key, searchTargetColumns.staffs.key, searchTargetColumns.tags.key].includes(targetColumn)) {
      const lowerSearchText = searchText.toLowerCase();
      return this.allFilms.filter((film) => film[targetColumn].toLowerCase().includes(lowerSearchText));
    }
    
    console.warn('Films Component : Find : Unknown Parameters', { targetColumn, searchText });
    return this.allFilms;
  }
}
