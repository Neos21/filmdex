import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Film } from '../entities/film';

/** 映画情報の DB 操作をするサービス */
@Injectable()
export class FilmsService {
  constructor(@InjectRepository(Film) private filmsRepository: Repository<Film>) { }
  
  /** 映画情報を全件取得する */
  public async findAll(): Promise<Array<Film>> {
    return await this.filmsRepository.find({
      order: {
        publishedYear: 'ASC',
        title: 'ASC'
      }
    });
  }
  
  /** 映画情報を登録・更新する */
  public async save(film: Film): Promise<Film> {
    return await this.filmsRepository.save(film);
  }
}
