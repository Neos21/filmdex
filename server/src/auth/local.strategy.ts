import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from './auth.service';

/** Local Strategy : User Name と Password を使って認証を行うクラス */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) { super(); }
  
  /**
   * ユーザ認証する
   * 
   * - Passport が validate() という名前の関数を期待するためこの関数名で実装している
   * - 参考 : https://docs.nestjs.com/security/authentication
   * 
   * @param userName User Name
   * @param password Password
   * @throws 認証失敗時
   */
  async validate(username: string, password: string): Promise<{ userName: string; password: string; }> {
    const auth = await this.authService.validateUser(username, password);
    if(!auth) throw new UnauthorizedException();
    return auth;
  }
}
