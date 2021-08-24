import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy as BaseJwtStrategy } from 'passport-jwt';  // LocalStrategy と親クラスを区別するために名前を付けておく

import { authConstants } from './auth-constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(BaseJwtStrategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Authorization bearer から JWT アクセストークンを読み込むようにする
      ignoreExpiration: false,  // 有効期間を無視しない
      secretOrKey: authConstants.jwtSecretKey  // JWT アクセストークン発行に使用する秘密鍵
    });
  }
  
  /**
   * Payload を使用して認証する (特に独自にすることはないので Payload をそのまま返すのみ)
   * 
   * @param payload Payload (AuthService#login() で定義している)
   * @return ユーザ情報
   */
  public async validate(payload: { userName: string; }): Promise<{ userName: string; }> {
    return { userName: payload.userName };
  }
}
