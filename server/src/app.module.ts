import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      database: './example.sqlite3.db',  // server/ 直下からのパス
      entities: [
        Film,
        Cast,
        Staff,
        Tag
      ],
      synchronize: true
    }),
    AuthModule,
    FilmsModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule { }
