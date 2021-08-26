import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { Film } from '../entities/film';

import { FilmsService } from './films.service';

/** 映画ルーティング・コントローラ */
@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) { }
  
  /** 映画情報を全件取得する */
  @UseGuards(JwtAuthGuard)
  @Get()
  public async findAll(): Promise<Array<Film>> {
    return await this.filmsService.findAll();
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
  public async save(@Body() film: Film): Promise<any> {
    return this.filmsService.save(film);
  }
}
