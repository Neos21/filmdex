import * as path from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

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
    // TypeORM : https://docs.nestjs.com/techniques/database
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: paths.sqliteDbFilePath,  // SQLite DB ファイルのパス (デフォルトでは server/ 直下からのパスで解釈される)
      entities: [
        Film,
        Cast,
        Staff,
        Tag
      ],
      synchronize: false,
      logging: false
    }),
    // ビルドした Angular 資材を配信する
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../../client/dist')
    }),
    // 環境変数を読み込む
    ConfigModule.forRoot({
      isGlobal: true  // 全てのモジュールから利用できるようにする
    }),
    AuthModule,
    FilmsModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule { }
