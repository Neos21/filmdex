import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { constants } from './constants';

/** ログイン・ログアウト認証 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) { }
  
  /**
   * ログインする
   * 
   * 実行後、呼び出し元で AuthGuard#isLogined を true にすること
   * (循環参照が発生するためこの Service 内では AuthGuard を操作できない)
   * 
   * @param userName User Name
   * @param password Password
   * @throws ログイン処理に失敗した場合
   */
  public async login(userName: string, password: string): Promise<void> {
    try {
      const auth = { userName, password };
      const result = await this.httpClient.post(`${environment.apiUrl}/login`, auth).toPromise();
      window.localStorage.setItem(constants.localStorageKey, JSON.stringify(auth));
      console.log('Auth Service : Login : Success', /*result*/);
    }
    catch(error) {
      console.error('Auth Service : Login : Error', error);
      throw error;
    }
  }
  
  /**
   * ログアウトする
   * 
   * 実行後、呼び出し元で AuthGuard#isLogined を true にすること
   * (循環参照が発生するためこの Service 内では AuthGuard を操作できない)
   */
  public async logout(): Promise<unknown> {
    window.localStorage.removeItem(constants.localStorageKey);
    return this.httpClient.get(`${environment.apiUrl}/logout`).toPromise()
      .catch(error => console.log('Auth Service : Logout : Error But Ignore', error));  // 通信エラーでも無視する
  }
}
