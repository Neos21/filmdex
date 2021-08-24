import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

/** 認証モジュール */
@Module({
  imports: [
    PassportModule
  ],
  providers: [
    AuthService,
    LocalStrategy
  ],
  controllers: [
    AuthController
  ]
})
export class AuthModule { }
