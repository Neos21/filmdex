import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy as BaseJwtStrategy } from 'passport-jwt';  // LocalStrategy と親クラスを区別するために名前を付けておく

import { AuthInfo } from './auth-info';

@Injectable()
export class JwtStrategy extends PassportStrategy(BaseJwtStrategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Authorization bearer から JWT アクセストークンを読み込むようにする
      ignoreExpiration: false,  // 有効期間を無視しない
      secretOrKey: configService.get<string>('FILMDEX_JWT_SECRET_KEY')  // JWT アクセストークン発行に使用する秘密鍵
    });
  }
  
  /**
   * Payload を使用して認証する (特に独自にすることはないので Payload をそのまま返すのみ)
   * 
   * @param payload Payload (AuthService#login() で定義している)
   * @return 認証ユーザ情報
   */
  public validate(payload: AuthInfo): AuthInfo {
    return new AuthInfo(payload.userName);
  }
}
