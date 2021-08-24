import { Injectable } from '@nestjs/common';

/** 認証サービス */
@Injectable()
export class AuthService {
  /**
   * ユーザ認証する
   * 
   * - 参考 : https://docs.nestjs.com/security/authentication
   * 
   * @param userName User Name
   * @param password Password
   * @return ユーザ情報・認証失敗時は null を返す
   */
  public async validateUser(userName: string, password: string): Promise<{ userName: string; password: string; } | null> {
    if(userName === 'Neos21' && password === 'changethis') {  // TODO : ユーザ情報を別途管理する
      const auth = { userName, password };
      return auth;
    }
    return null;
  }
}
