import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Film } from '../entities/film';
import { Cast } from '../entities/cast';
import { Staff } from '../entities/staff';
import { Tag } from '../entities/tag';

import { FilmsService } from './films.service';
import { ExportToJsonService } from './export-to-json.service';
import { FilmsController } from './films.controller';
import { ExportToJsonController } from './export-to-json.controller';

@Module({
  imports: [
    // 配下の Service などで Repository を使えるようにする
    TypeOrmModule.forFeature([
      Film,
      Cast,
      Staff,
      Tag
    ])
  ],
  providers: [
    FilmsService,
    ExportToJsonService
  ],
  controllers: [
    FilmsController,
    ExportToJsonController
  ]
})
export class FilmsModule {}
