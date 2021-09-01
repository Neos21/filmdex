import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film } from '../../../../../server/src/entities/film';

import { environment } from '../../../environments/environment';

/** 管理用 API と映画情報をやり取りするサービス */
@Injectable()
export class AdminApiFilmsService {
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
  
  /**
   * 映画情報を登録する (メタ情報含めた登録も可能)
   * 
   * @param film 登録する映画情報
   * @return 登録した映画情報
   */
  public async create(film: Film): Promise<Film> {
    return await this.httpClient.post<Film>(`${environment.apiUrl}/films`, film).toPromise();
  }
  
  /**
   * 映画情報を更新する (メタ情報含めた更新も可能)
   * 
   * @param film 更新する映画情報 (メタ情報がある場合は既存データを削除し、渡されたメタ情報のみ登録する)
   * @return 更新した映画情報 (メタ情報含む)
   */
  public async save(film: Film): Promise<Film> {
    return await this.httpClient.put<Film>(`${environment.apiUrl}/films/${film.id}`, film).toPromise();
  }
  
  /**
   * 映画情報を削除する (紐付くメタ情報も削除する)
   * 
   * @param id 削除する映画情報 ID
   * @return 削除が成功したら true を返す
   */
  public async remove(id: number): Promise<boolean> {
    return await this.httpClient.delete<boolean>(`${environment.apiUrl}/films/${id}`).toPromise();
  }
  
  /**
   * 映画情報の SQLite DB ファイルを JSON ファイルにエクスポートする
   * 
   * @return 出力した JSON ファイルのフルパス・エラー時はエラーオブジェクト
   */
  public async exportToJson(): Promise<{ savedJsonFilePaths?: Array<string>; error?: any; }> {
    return await this.httpClient.post<{ savedJsonFilePaths?: Array<string>; error?: any; }>(`${environment.apiUrl}/export-to-json`, null).toPromise();
  }
}
