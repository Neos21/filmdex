import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film } from '../../../../../../server/src/entities/film';

import { environment } from '../../../../environments/environment';

/** 映画情報 API をコールするサービス */
@Injectable({ providedIn: 'root' })
export class ApiFilmsService {
  constructor(private httpClient: HttpClient) { }
  
  /** 映画情報を全件取得する */
  public async findAll(): Promise<Array<Film>> {
    return await this.httpClient.get(`${environment.apiUrl}/films`).toPromise() as Array<Film>;
  }
  
  /** 映画情報を登録する */
  public async create(film: Film): Promise<any> {
    return await this.httpClient.post(`${environment.apiUrl}/films`, film).toPromise();
  }
  
  /** 映画情報を更新する */
  public async save(film: Film): Promise<any> {
    return await this.httpClient.put(`${environment.apiUrl}/films/${film.id}`, film).toPromise();
  }
}
