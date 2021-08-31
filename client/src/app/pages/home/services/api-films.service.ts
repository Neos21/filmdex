import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film } from '../../../../../../server/src/entities/film';

import { environment } from '../../../../environments/environment';

/** 映画情報 API をコールするサービス */
@Injectable({ providedIn: 'root' })
export class ApiFilmsService {
  constructor(private httpClient: HttpClient) { }
  
  /** 映画情報 (メタ情報込み) を複数取得する */
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
  
  /** 映画メタ情報 (メタ情報込み) を1件取得する */
  public async findOne(filmId: number): Promise<Film> {
    return await this.httpClient.get<Film>(`${environment.apiUrl}/films/${filmId}`).toPromise();
  }
  
  /** 映画情報を登録する */
  public async create(film: Film): Promise<Film> {
    return await this.httpClient.post<Film>(`${environment.apiUrl}/films`, film).toPromise();
  }
  
  /** 映画情報を更新する (メタ情報を含めての更新も可能) */
  public async save(film: Film): Promise<Film> {
    return await this.httpClient.put<Film>(`${environment.apiUrl}/films/${film.id}`, film).toPromise();
  }
  
  /** 映画情報を削除する */
  public async remove(filmId: number): Promise<boolean> {
    return await this.httpClient.delete<boolean>(`${environment.apiUrl}/films/${filmId}`).toPromise();
  }
}
