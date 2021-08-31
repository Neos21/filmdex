import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film } from '../../../../../server/src/entities/film';

import { environment } from '../../../environments/environment';

/** 公開 API と映画情報をやり取りするサービス */
@Injectable({ providedIn: 'root' })
export class PublicApiFilmsService {
  constructor(private httpClient: HttpClient) { }
  
  /**
   * 映画情報 (メタ情報込み) を複数取得する
   * 
   * @param targetColumn 検索条件カラム名・未指定の場合は全件取得する
   * @param searchText 検索文字列・未指定の場合は全件取得する
   * @return 映画情報の配列
   */
  public async find(targetColumn?: string, searchText?: string): Promise<Array<Film>> {
    const options: { params?: {}} = {};
    if(targetColumn && searchText) {  // 検索条件があれば指定する
      options.params = {
        target_column: targetColumn,
        search_text  : searchText
      };
    }
    return await this.httpClient.get<Array<Film>>(`${environment.apiUrl}/films`, options).toPromise();
  }
  
  /**
   * ID を指定して映画情報 (メタ情報込み) を1件取得する
   * 
   * @param id 映画情報 ID
   * @return 映画情報 (メタ情報込み)
   */
  public async findById(id: number): Promise<Film> {
    return await this.httpClient.get<Film>(`${environment.apiUrl}/films/${id}`).toPromise();
  }
}
