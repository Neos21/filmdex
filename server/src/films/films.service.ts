import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { Film } from '../entities/film';
import { Cast } from '../entities/cast';
import { Staff } from '../entities/staff';
import { Tag } from '../entities/tag';

import { searchTargetColumns } from '../classes/search-target-columns';

/** 映画情報の DB 操作をするサービス */
@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private filmsRepository: Repository<Film>,
    private connection: Connection
  ) { }
  
  /**
   * 映画情報 (メタ情報込み) を複数取得する
   * 
   * @param targetColumn 検索条件カラム名・未指定の場合は全件取得する
   * @param searchText 検索文字列・未指定の場合は全件取得する
   * @return 映画情報の配列
   */
  public async find(targetColumn?: string, searchText?: string): Promise<Array<Film>> {
    // NOTE : Repository API の find() だと Error: Cannot query across one-to-many for property エラーが回避できないので Query Builder API を使う
    let queryBuilder = this.filmsRepository.createQueryBuilder('films')
      .leftJoinAndSelect('films.casts', 'casts')
      .leftJoinAndSelect('films.staffs', 'staffs')
      .leftJoinAndSelect('films.tags', 'tags');
    
    if(targetColumn && searchText) {
      targetColumn = targetColumn.trim();  // クライアントサイドの処理を信用せずに Trim する
      searchText   = searchText.trim();
      
      if(targetColumn === searchTargetColumns.publishedYear.key) {
        queryBuilder = queryBuilder.where('published_year = :publishedYear', { publishedYear: searchText });
      }
      else if(targetColumn === searchTargetColumns.publishedAge.key) {
        const startYear = Number(searchText);
        const endYear   = startYear + 9;
        queryBuilder = queryBuilder.where('published_year BETWEEN :startYear AND :endYear', { startYear: startYear, endYear: endYear });
      }
      else if(targetColumn === searchTargetColumns.title.key) {
        queryBuilder = queryBuilder.where('title LIKE :title', { title: `${searchText}%` }).orWhere('japanese_title LIKE :title', { title: `${searchText}%` });
      }
      else if(targetColumn === searchTargetColumns.cast.key) {
        queryBuilder = queryBuilder.where(`casts.name LIKE :name`, { name: `%${searchText}%` }).orWhere('casts.role LIKE :name', { name: `${searchText}%` });
      }
      else if(targetColumn === searchTargetColumns.staff.key) {
        queryBuilder = queryBuilder.where(`staffs.name LIKE :name`, { name: `%${searchText}%` }).orWhere('staffs.role LIKE :name', { name: `${searchText}%` });
      }
      else if(targetColumn === searchTargetColumns.tag.key) {
        queryBuilder = queryBuilder.where(`tags.name LIKE :name`, { name: `%${searchText}%` });
      }
    }
    
    return await queryBuilder.orderBy('published_year', 'ASC').addOrderBy('title', 'ASC').getMany();
  }
  
  /**
   * ID を指定して映画情報 (メタ情報込み) を1件取得する
   * 
   * @param id 取得する映画情報 ID
   * @return 映画情報 (メタ情報込み)
   */
  public async findById(id: number): Promise<Film> {
    return await this.filmsRepository.createQueryBuilder('films')
      .leftJoinAndSelect('films.casts', 'casts')
      .leftJoinAndSelect('films.staffs', 'staffs')
      .leftJoinAndSelect('films.tags', 'tags')
      .where('id = :filmId', { filmId: id })
      .orderBy('casts.order', 'ASC')
      .addOrderBy('staffs.order', 'ASC')
      .addOrderBy('tags.order', 'ASC')
      .getOne();
  }
  
  /**
   * 映画情報を登録・更新する
   * 
   * メタ情報がある場合は既存データを削除し、渡されたメタ情報のみ登録する
   * 
   * @param film 登録・更新する映画情報
   * @return 登録・更新した映画情報 (メタ情報含む)
   */
  public async save(film: Film): Promise<Film> {
    return await this.connection.transaction(async (entityManager) => {
      // リクエストデータにメタ情報が含まれている場合は全削除・全追加とする
      // 登録時は ID が未採番なので Film を先に保存し、採番した ID をメタ情報に設定して保存する (更新時は既に ID が設定されているので不要な処理になるが…)
      let casts  = film.casts  ? film.casts .map(cast  => new Cast (cast )) : [];
      let staffs = film.staffs ? film.staffs.map(staff => new Staff(staff)) : [];
      let tags   = film.tags   ? film.tags  .map(tag   => new Tag  (tag  )) : [];
      
      if(film.casts) {
        await entityManager.delete(Cast, { filmId: film.id });
        delete film.casts;
      }
      if(film.staffs) {
        await entityManager.delete(Staff, { filmId: film.id });
        delete film.staffs;
      }
      if(film.tags) {
        await entityManager.delete(Tag, { filmId: film.id });
        delete film.tags;
      }
      
      // Film テーブルのみ登録・更新する
      const savedFilm = await entityManager.save(new Film(film));
      
      // 保存した映画情報の ID を設定し保存する (readonly を as any で回避する)
      casts  = casts .map((cast ) => { (cast  as any).filmId = savedFilm.id; return cast ; });
      staffs = staffs.map((staff) => { (staff as any).filmId = savedFilm.id; return staff; });
      tags   = tags  .map((tag  ) => { (tag   as any).filmId = savedFilm.id; return tag  ; });
      if(casts .length) await entityManager.save(casts );
      if(staffs.length) await entityManager.save(staffs);
      if(tags  .length) await entityManager.save(tags  );
      
      return savedFilm;
    }).then((savedFilm) => this.findById(savedFilm.id));  // コミット後の情報を再取得して返す
  }
  
  /**
   * 映画情報を削除する (紐付くメタ情報も削除する)
   * 
   * @param id 削除する映画情報 ID
   * @return 削除が成功したら true を返す
   */
  public async remove(id: number): Promise<boolean> {
    return await this.connection.transaction(async (entityManager) => {
      await entityManager.delete(Cast , { filmId: id });
      await entityManager.delete(Staff, { filmId: id });
      await entityManager.delete(Tag  , { filmId: id });
      await entityManager.delete(Film , { id    : id });
      return true;  // 削除成功時は true だけ返しておく (DeleteResult オブジェクトには特に情報ない)
    });
  }
}
