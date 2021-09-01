import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { paths } from './scripts/export-to-json-function';

import { Film } from './entities/film';
import { Cast } from './entities/cast';
import { Staff } from './entities/staff';
import { Tag } from './entities/tag';

import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';

import { AppController } from './app.controller';

/** App Module */
@Module({
  imports: [
    // https://docs.nestjs.com/techniques/database
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: paths.sqliteDbFilePath,  // 標準は server/ 直下からのパス
      entities: [
        Film,
        Cast,
        Staff,
        Tag
      ],
      synchronize: false,
      logging: false
    }),
    AuthModule,
    FilmsModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule { }
