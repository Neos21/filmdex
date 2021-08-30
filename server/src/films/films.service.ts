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
  
  /** 映画情報を取得する */
  public async find(targetColumn?: string, searchText?: string): Promise<Array<Film>> {
    const options: FindManyOptions<Film> = {
      order: {
        publishedYear: 'ASC',
        title: 'ASC'
      }
    };
    if(targetColumn && searchText) {  // 検索条件アリ
      targetColumn = targetColumn.trim();
      searchText   = searchText.trim();
      
      if(targetColumn === 'published_year') {  // 1年指定
        options.where = { publishedYear: searchText }
      }
      else if(targetColumn === 'published_age') {  // 10年区切りの年代 (00～09 年)
        const startYear = Number(searchText);
        const endYear   = startYear + 9;
        options.where = { publishedYear: Between(startYear, endYear) };
      }
      else if(targetColumn === 'title') {  // 原題・邦題両方を対象に部分一致
        options.where = [
          { title        : Like(`%${searchText}%`) },
          { japaneseTitle: Like(`%${searchText}%`) }
        ];
      }
      // TODO : 親子関係を作らないと検索できない
      //else if(targetColumn === 'cast') {
      //  options.where = { cast: searchText };
      //}
      //else if(targetColumn === 'staff') {
      //  options.where = { staff: searchText };
      //}
      //else if(targetColumn === 'tag') {
      //  options.where = { tag: searchText };
      //}
    }
    return await this.filmsRepository.find(options);
  }
  
  /** 映画情報を登録・更新する */
  public async save(film: Film): Promise<Film> {
    return await this.filmsRepository.save(film);
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
