import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';

import { Film } from '../entities/film';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FilmsService } from './films.service';

/** 映画ルーティング・コントローラ */
@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) { }
  
  /** 映画情報 (メタ情報込み) を複数取得する */
  @UseGuards(JwtAuthGuard)
  @Get()
  public async find(@Query('target_column') targetColumn?: string, @Query('search_text') searchText?: string): Promise<Array<Film>> {
    return await this.filmsService.find(targetColumn, searchText);
  }
  
  /** 映画情報1件 (メタ情報込み) を取得する */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async findOne(@Param('id') filmId: number): Promise<Film> {
    return this.filmsService.findOne(filmId);
  }
  
  /** 映画情報を登録する */
  @UseGuards(JwtAuthGuard)
  @Post()
  public async create(@Body() film: Film): Promise<Film> {
    return this.filmsService.save(film);
  }
  
  /** 映画情報を更新する (メタ情報含めた更新も可能) */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  public async save(@Body() film: Film): Promise<Film> {
    return this.filmsService.save(film);
  }
  
  /** 映画情報を削除する */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public async remove(@Param('id') filmId: number): Promise<boolean> {
    return this.filmsService.remove(filmId);
  }
}
