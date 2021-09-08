import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { authConstants } from './auth-constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

/** 認証モジュール */
@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService], // useFactory で使うサービスを注入する
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('FILMDEX_JWT_SECRET_KEY'),  // 環境変数から注入する
        signOptions: { expiresIn: authConstants.jwtTokenExpiresIn }  // JWT アクセストークンの有効期限
      })
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
