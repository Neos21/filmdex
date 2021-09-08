import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { searchTargetColumns } from '../../../../../server/src/classes/search-target-columns';

/** 「映画一覧」画面 */
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  /** 映画情報一覧 */
  public films: Array<Film> = [];
  
  /** 現在の状態 : loading・loaded・searching・searched・'' */
  public currentState: string = 'loading';
  
  /** エラーメッセージ */
  public errorMessage: string = '';
  
  /** 全ての映画情報一覧 */
  private allFilms: Array<Film> = [];
  
  constructor(private httpClient: HttpClient) { }
  
  /** 画面初期表示時 */
  public async ngOnInit(): Promise<void> {
    await this.loadJson();
    await this.onSearch();
  }
  
  /**
   * 画面初期表示時・および子コンポーネントの「検索」「Reload」ボタン押下時 : 映画情報を複数取得する
   * 
   * @param findParams 検索条件・未指定の場合は undefined となり全件取得になる
   */
  public onSearch(findParams?: { targetColumn: string; searchText: string; }): void {
    this.currentState = findParams ? 'searching' : 'loading';
    this.errorMessage = '';
    try {
      // 検索条件がなければ全件割り当てる
      if(!findParams) {
        this.films = this.allFilms;
      }
      else {
        this.films = this.find(findParams.targetColumn, findParams.searchText);
      }
    }
    catch(error) {
      console.error('Films Component : On Search', error);
      this.errorMessage = 'Failed To Search Films';
    }
    finally {
      this.currentState = findParams ? 'searched' : 'loaded';
    }
  }
  
  /**
   * 現在の状態を基にフォーム部品を非活性にするか否か判定する
   * 
   * @return 非活性にする場合は true
   */
  public isDisabled(): boolean {
    return ['loading', 'searching'].includes(this.currentState);
  }
  
  /** JSON ファイルを初回読み込みする */
  private async loadJson(): Promise<void> {
    try {
      // 本コンポーネントが '/' で開かれることを前提に相対パスで記述する
      this.allFilms = await this.httpClient.get<Array<Film>>('./assets/filmdex.json').toPromise();
      console.log('Films Component : Load JSON', this.allFilms);
    }
    catch(error) {
      console.error('Films Component : Load JSON', error);
      this.errorMessage = 'Failed To Load JSON';
    }
  }
  
  /**
   * 映画情報を検索する
   * 
   * サーバサイドでの検索処理と同等のフィルタを実装する
   * 
   * @param targetColumn 検索条件カラム名
   * @param searchText 検索文字列
   * @return 映画情報の配列
   */
  private find(targetColumn: string, searchText: string): Array<Film> {
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
    if(targetColumn === searchTargetColumns.cast.key) {
      const lowerSearchText = searchText.toLowerCase();
      return this.allFilms.filter((film) => film.casts.some((cast) => cast.name.toLowerCase().includes(lowerSearchText) || cast.role.toLowerCase().includes(lowerSearchText)));
    }
    if(targetColumn === searchTargetColumns.staff.key) {
      const lowerSearchText = searchText.toLowerCase();
      return this.allFilms.filter((film) => film.staffs.some((staff) => staff.name.toLowerCase().includes(lowerSearchText) || staff.role.toLowerCase().includes(lowerSearchText)));
    }
    if(targetColumn === searchTargetColumns.tag.key) {
      const lowerSearchText = searchText.toLowerCase();
      return this.allFilms.filter((film) => film.tags.some((tag) => tag.name.toLowerCase().includes(lowerSearchText)));
    }
    
    console.warn('Films Component : Find : Unknown Target Column, Returns All Films', { targetColumn, searchText });
    return this.allFilms;
  }
}

/** JSON ファイル内の映画情報の型 */
class Film {
  public publishedYear: number;
  public title: string;
  public japaneseTitle: string;
  public scenario: string;
  public review: string;
  public casts: Array<Cast>;
  public staffs: Array<Staff>;
  public tags: Array<Tag>;
}

/** JSON ファイル内のキャスト情報の型 */
class Cast {
  public role: string;
  public name: string;
}

/** JSON ファイル内のスタッフ情報の型 */
class Staff {
  public role: string;
  public name: string;
}

/** JSON ファイル内のタグ情報の型 */
class Tag {
  public name: string;
}
