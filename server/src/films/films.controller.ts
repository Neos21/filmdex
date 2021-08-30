import { Body, Controller, Get, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { Film } from '../entities/film';
import { FilmMeta } from '../entities/film-meta';

import { FilmsService } from './films.service';

/** 映画ルーティング・コントローラ */
@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) { }
  
  /** 映画情報を取得する */
  @UseGuards(JwtAuthGuard)
  @Get()
  public async find(@Query('target_column') targetColumn: string, @Query('search_text') searchText: string): Promise<Array<Film>> {
    return await this.filmsService.find(targetColumn, searchText);
  }
  
  /** 映画情報を登録する */
  @UseGuards(JwtAuthGuard)
  @Post()
  public async create(@Body() film: Film): Promise<Film> {
    return this.filmsService.save(film);
  }
  
  /** 映画情報を更新する */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  public async save(@Body() film: Film): Promise<Film> {
    return this.filmsService.save(film);
  }
  
  /** 映画メタ情報を取得する */
  @UseGuards(JwtAuthGuard)
  @Get(':id/meta')
  public async findMeta(@Param('id') filmId: number): Promise<FilmMeta> {
    return this.filmsService.findMeta(filmId);
  }
  
  /** 映画メタ情報を更新する */
  @UseGuards(JwtAuthGuard)
  @Put(':id/meta')
  public async saveMeta(@Body() filmMeta: FilmMeta): Promise<FilmMeta> {
    return this.filmsService.saveMeta(filmMeta);
  }
}
