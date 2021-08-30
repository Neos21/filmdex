import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film } from '../../../../../../server/src/entities/film';
import { FilmMeta } from '../../../../../../server/src/entities/film-meta';

import { environment } from '../../../../environments/environment';

/** 映画情報 API をコールするサービス */
@Injectable({ providedIn: 'root' })
export class ApiFilmsService {
  constructor(private httpClient: HttpClient) { }
  
  /** 映画情報を全件取得する */
  public async findAll(): Promise<Array<Film>> {
    return await this.httpClient.get<Array<Film>>(`${environment.apiUrl}/films`).toPromise();
  }
  
  /** 映画情報を検索する */
  public async search(targetColumn: string, searchText: string): Promise<Array<Film>> {
    return await this.httpClient.get<Array<Film>>(`${environment.apiUrl}/films`, {
      params: {
        target_column: targetColumn,
        search_text  : searchText
      }
    }).toPromise();
  }
  
  /** 映画情報を登録する */
  public async create(film: Film): Promise<Film> {
    return await this.httpClient.post<Film>(`${environment.apiUrl}/films`, film).toPromise();
  }
  
  /** 映画情報を更新する */
  public async save(film: Film): Promise<Film> {
    return await this.httpClient.put<Film>(`${environment.apiUrl}/films/${film.id}`, film).toPromise();
  }
  
  /** 映画メタ情報を取得する */
  public async findMeta(filmId: number): Promise<FilmMeta> {
    return await this.httpClient.get<FilmMeta>(`${environment.apiUrl}/films/${filmId}/meta`).toPromise();
  }
  
  /** 映画メタ情報を更新する */
  public async saveMeta(filmMeta: FilmMeta): Promise<FilmMeta> {
    return await this.httpClient.put<FilmMeta>(`${environment.apiUrl}/films/${filmMeta.filmId}/meta`, filmMeta).toPromise();
  }
}
