import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';

import { Film } from '../entities/film';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { FilmsService } from './films.service';

/** 映画ルーティング・コントローラ */
@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) { }
  
  /**
   * 公開 API : 映画情報 (メタ情報込み) を複数取得する
   * 
   * @param targetColumn 検索条件カラム名・未指定の場合は全件取得する
   * @param searchText 検索文字列・未指定の場合は全件取得する
   * @return 映画情報の配列
   */
  @Get()
  public async find(@Query('target_column') targetColumn?: string, @Query('search_text') searchText?: string): Promise<Array<Film>> {
    return await this.filmsService.find(targetColumn, searchText);
  }
  
  /**
   * 公開 API : ID を指定して映画情報1件 (メタ情報込み) を1件取得する
   * 
   * @param id 取得する映画情報 ID
   * @return 映画情報 (メタ情報込み)
   */
  @Get(':id')
  public async findById(@Param('id') id: number): Promise<Film> {
    return this.filmsService.findById(id);
  }
  
  /**
   * 映画情報を登録する (メタ情報含めた登録も可能)
   * 
   * @param film 登録する映画情報
   * @return 登録した映画情報
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  public async create(@Body() film: Film): Promise<Film> {
    return this.filmsService.save(film);
  }
  
  /**
   * 映画情報を更新する (メタ情報含めた更新も可能)
   * 
   * @param film 更新する映画情報 (メタ情報がある場合は既存データを削除し、渡されたメタ情報のみ登録する)
   * @return 更新した映画情報 (メタ情報含む)
   */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  public async save(@Body() film: Film): Promise<Film> {
    return this.filmsService.save(film);
  }
  
  /**
   * 映画情報を削除する (紐付くメタ情報も削除する)
   * 
   * @param id 削除する映画情報 ID
   * @return 削除が成功したら true を返す
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<boolean> {
    return this.filmsService.remove(id);
  }
}
