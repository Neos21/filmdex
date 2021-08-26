import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Film } from '../entities/film';

import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';

@Module({
  imports: [
    // 配下の Service などで Repository を使えるようにする
    TypeOrmModule.forFeature([
      Film
    ])
  ],
  providers: [
    FilmsService
  ],
  controllers: [
    FilmsController
  ]
})
export class FilmsModule {}
