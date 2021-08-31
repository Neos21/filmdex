import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Connection, FindManyOptions, Like, Repository } from 'typeorm';

import { Film } from '../entities/film';
import { Cast } from '../entities/cast';
import { Staff } from '../entities/staff';
import { Tag } from '../entities/tag';
import { FilmMeta } from '../entities/film-meta';

/** 映画情報の DB 操作をするサービス */
@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)  private filmsRepository : Repository<Film>,
    @InjectRepository(Cast)  private castsRepository : Repository<Cast>,
    @InjectRepository(Staff) private staffsRepository: Repository<Staff>,
    @InjectRepository(Tag)   private tagsRepository  : Repository<Tag>,
    private connection: Connection
  ) { }
  
  /**
   * 映画情報を取得する
   * 
   * @param targetColumn 検索条件・ない場合は全件検索となる
   * @param searchText 検索条件・ない場合は全件検索となる
   * @return 映画情報の配列
   */
  public async find(targetColumn?: string, searchText?: string): Promise<Array<Film>> {
    // Repository API の find() だと Error: Cannot query across one-to-many for property エラーが回避できないので Query Builder API を使う
    let queryBuilder = this.filmsRepository.createQueryBuilder('films');
    //.orderBy('published_year', 'ASC').orderBy('title', 'ASC');
    //const options: FindManyOptions<Film> = { order: { publishedYear: 'ASC', title: 'ASC' } };
    
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
        queryBuilder = queryBuilder
          .leftJoinAndSelect('films.casts', 'casts')
          .where(`casts.name LIKE :name`, { name: `%${searchText}%` }).orWhere('casts.role LIKE :name', { name: `${searchText}%` });
      }
      else if(targetColumn === 'staff') {
        queryBuilder = queryBuilder
          .leftJoinAndSelect('films.staffs', 'staffs')
          .where(`staffs.name LIKE :name`, { name: `%${searchText}%` }).orWhere('staffs.role LIKE :name', { name: `${searchText}%` });
      }
      else if(targetColumn === 'tag') {
        queryBuilder = queryBuilder
          .leftJoinAndSelect('films.tags', 'tags')
          .where(`tags.name LIKE :name`, { name: `%${searchText}%` });
      }
    }
    return await queryBuilder.getMany();
  }
  
  /** 映画情報を登録・更新する */
  public async save(film: Film): Promise<Film> {
    return await this.filmsRepository.save(film);
  }
  
  /** 映画情報・映画メタ情報を削除する */
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
  
  /** 映画メタ情報を取得する */
  public async findMeta(filmId: number): Promise<FilmMeta> {
    const options: FindManyOptions<Cast | Staff | Tag> = {
      where: {
        filmId: filmId
      },
      order: {
        order: 'ASC'
      }
    };
    const casts  = await this.castsRepository.find(options);
    const staffs = await this.staffsRepository.find(options);
    const tags   = await this.tagsRepository.find(options);
    return new FilmMeta(filmId, casts, staffs, tags);
  }
  
  /** 映画メタ情報を更新する */
  public async saveMeta(filmMeta: FilmMeta): Promise<FilmMeta> {
    return await this.connection.transaction(async (entityManager) => {
      // 先に一度全データを消す (行削除に対応するため)
      const deleteOptions = { filmId: filmMeta.filmId };
      await entityManager.delete(Cast , deleteOptions);
      await entityManager.delete(Staff, deleteOptions);
      await entityManager.delete(Tag  , deleteOptions);
      
      // 全データを保存する (CannotDetermineEntityError 回避のためクラスに詰め直す)
      const savedCasts  = await entityManager.save(filmMeta.casts.map(cast => new Cast(cast)));
      const savedStaffs = await entityManager.save(filmMeta.staffs.map(staff => new Staff(staff)));
      const savedTags   = await entityManager.save(filmMeta.tags.map(tag => new Tag(tag)));
      
      // 念のため order の順番で並べ直す
      const sortFunction = (a, b) => {
        if(a.filmId < b.filmId) return -1;
        if(a.filmId > b.filmId) return  1;
        return 0;
      };
      const casts  = savedCasts.sort(sortFunction);
      const staffs = savedStaffs.sort(sortFunction);
      const tags   = savedTags.sort(sortFunction);
      return new FilmMeta(filmMeta.filmId, casts, staffs, tags);
    });
  }
}
