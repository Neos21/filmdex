import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { authConstants } from './auth-constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

/** 認証モジュール */
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: authConstants.jwtSecretKey,  // JwtStrategy で指定しているものと同じ値を入れておかないと `secretOrPrivateKey must have a value` エラーが発生する
      signOptions: {  expiresIn: authConstants.jwtTokenExpiresIn }  // JWT アクセストークンの有効期限 
    })
  ],
  providers: [
    LocalStrategy,
    JwtStrategy
  ],
  controllers: [
    AuthController
  ]
})
export class AuthModule { }
