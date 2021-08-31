import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film } from '../../../../../../server/src/entities/film';

import { environment } from '../../../../environments/environment';

/** 管理用 API と映画情報をやり取りするサービス */
@Injectable()
export class AdminApiFilmsService {
  constructor(private httpClient: HttpClient) { }
  
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
}
