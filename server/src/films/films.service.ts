import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { Film } from '../entities/film';
import { Cast } from '../entities/cast';
import { Staff } from '../entities/staff';
import { Tag } from '../entities/tag';

/** 映画情報の DB 操作をするサービス */
@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)  private filmsRepository : Repository<Film>,
    private connection: Connection
  ) { }
  
  /**
   * 映画情報 (メタ情報込み) を複数取得する
   * 
   * @param targetColumn 検索条件・ない場合は全件検索となる
   * @param searchText 検索条件・ない場合は全件検索となる
   * @return 映画情報の配列
   */
  public async find(targetColumn?: string, searchText?: string): Promise<Array<Film>> {
    // Repository API の find() だと Error: Cannot query across one-to-many for property エラーが回避できないので Query Builder API を使う
    let queryBuilder = this.filmsRepository.createQueryBuilder('films')
      .leftJoinAndSelect('films.casts', 'casts')
      .leftJoinAndSelect('films.staffs', 'staffs')
      .leftJoinAndSelect('films.tags', 'tags');
    
    if(targetColumn && searchText) {  // 検索条件アリ
      targetColumn = targetColumn.trim();
      searchText   = searchText.trim();
      
      if(targetColumn === 'published_year') {  // 1年指定
        queryBuilder = queryBuilder.where('published_year = :publishedYear', { publishedYear: searchText });
      }
      else if(targetColumn === 'published_age') {  // 10年区切りの年代 (00～09 年)
        const startYear = Number(searchText);
        const endYear   = startYear + 9;
        queryBuilder = queryBuilder.where('published_year BETWEEN :startYear AND :endYear', { startYear: startYear, endYear: endYear });
      }
      else if(targetColumn === 'title') {  // 原題・邦題両方を対象に部分一致
        queryBuilder = queryBuilder.where('title LIKE :title', { title: `${searchText}%` }).orWhere('japanese_title LIKE :title', { title: `${searchText}%` });
      }
      else if(targetColumn === 'cast') {
        queryBuilder = queryBuilder.where(`casts.name LIKE :name`, { name: `%${searchText}%` }).orWhere('casts.role LIKE :name', { name: `${searchText}%` });
      }
      else if(targetColumn === 'staff') {
        queryBuilder = queryBuilder.where(`staffs.name LIKE :name`, { name: `%${searchText}%` }).orWhere('staffs.role LIKE :name', { name: `${searchText}%` });
      }
      else if(targetColumn === 'tag') {
        queryBuilder = queryBuilder.where(`tags.name LIKE :name`, { name: `%${searchText}%` });
      }
    }
    return await queryBuilder.orderBy('published_year', 'ASC').addOrderBy('title', 'ASC').getMany();
  }
  
  /** ID を指定して映画情報 (メタ情報込み) を1件取得する */
  public async findOne(filmId: number): Promise<Film> {
    return await this.filmsRepository.createQueryBuilder('films')
      .leftJoinAndSelect('films.casts', 'casts')
      .leftJoinAndSelect('films.staffs', 'staffs')
      .leftJoinAndSelect('films.tags', 'tags')
      .where('id = :filmId', { filmId: filmId })
      .orderBy('casts.order', 'ASC')
      .addOrderBy('staffs.order', 'ASC')
      .addOrderBy('tags.order', 'ASC')
      .getOne();
  }
  
  /** 映画情報を登録・更新する (メタ情報がある場合はメタ情報も更新する) */
  public async save(film: Film): Promise<Film> {
    return await this.connection.transaction(async (entityManager) => {
      // リクエストデータにメタ情報が含まれている場合は、全削除・全追加とする
      if(film.casts) {
        await entityManager.delete(Cast, { filmId: film.id });
        await entityManager.save(film.casts.map(cast => new Cast(cast)));
        delete film.casts;
      }
      if(film.staffs) {
        await entityManager.delete(Staff, { filmId: film.id });
        await entityManager.save(film.staffs.map(staff => new Staff(staff)));
        delete film.staffs;
      }
      if(film.tags) {
        await entityManager.delete(Tag, { filmId: film.id });
        await entityManager.save(film.tags.map(tag => new Tag(tag)));
        delete film.tags;
      }
      
      await entityManager.save(new Film(film));  // Film テーブルのみ更新する
    }).then(() => this.findOne(film.id));  // コミット後の情報を再取得して返す
  }
  
  /** 映画情報 (メタ情報込み) を削除する */
  public async remove(filmId: number): Promise<boolean> {
    return await this.connection.transaction(async (entityManager) => {
      const deleteOptions = { filmId: filmId };
      await entityManager.delete(Cast , deleteOptions);
      await entityManager.delete(Staff, deleteOptions);
      await entityManager.delete(Tag  , deleteOptions);
      await entityManager.delete(Film, { id: filmId });  // DeleteResult オブジェクト
      return true;  // 削除成功時は true だけ返しておく (DeleteResult オブジェクトには特に情報ないので)
    });
  }
}
