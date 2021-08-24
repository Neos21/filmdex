import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { environment } from '../../environments/environment';

import { constants } from './constants';

/** 画面遷移時に認証チェックする */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /** ログインしたかどうか */
  public isLogined: boolean = false;
  
  constructor(private httpClient: HttpClient, private router: Router) { }
  
  /**
   * 画面遷移前に認証チェックする
   * 
   * @param _next ActivatedRouteSnapshot
   * @param _state RouterStateSnapshot
   * @return 遷移してよければ true、遷移させたくなければ false を返す
   */
  public async canActivate(_activatedRouteSnapshot: ActivatedRouteSnapshot, _routerStateSnapshot: RouterStateSnapshot): Promise<boolean> {
    if(this.isLogined) return true;  // ログイン済なので遷移を許可する
    
    // 初回表示時は LocalStorage のデータを使用して自動再ログイン (JWT アクセストークン再発行) を試行する
    return await this.reLogin();
  }
  
  /**
   * ログインする
   * 
   * @param userName User Name
   * @param password Password
   * @throws ログイン処理に失敗した場合
   */
  public async login(userName: string, password: string): Promise<void> {
    try {
      const auth = { userName, password };
      const { accessToken } = await this.httpClient.post(`${environment.apiUrl}/auth/login`, { userName, password }).toPromise() as Record<string, string>;
      
      window.localStorage.setItem(constants.localStorageKeyAuth, JSON.stringify(auth));
      window.localStorage.setItem(constants.localStorageKeyAccessToken, accessToken);
      this.isLogined = true;
      console.log('Auth Guard : Login : Succeeded', auth);
    }
    catch(error) {
      console.error('Auth Guard : Login : Error', error);
      throw error;
    }
  }
  
  /**
   * LocalStorage に保存されている User Name・Password を利用して再ログイン (JWT アクセストークン再発行) する
   * 
   * @return 再ログインに成功し遷移を許可する場合は true・遷移を許可しない場合は false を返しつつ /login に遷移させる
   */
  public async reLogin(): Promise<boolean> {
    try {
      const rawAuth = window.localStorage.getItem(constants.localStorageKeyAuth);
      if(!rawAuth) throw new Error('LocalStorage Is Empty, Cannot Re Login');
      
      const auth = JSON.parse(rawAuth);
      await this.login(auth.userName, auth.password);
      return true;
    }
    catch(error) {
      // 自動再ログインができなければ明示的にログアウト状態にしログインページに遷移する
      console.warn('Auth Guard : Re Login : Failed, Redirect To Login Page', error);
      this.logout();
      this.router.navigate(['/login']);
      return false;
    }
  }
  
  /**
   * ログアウトする
   * 
   * サーバサイドは JWT アクセストークンにて認証しているため、サーバサイドにはログアウトの概念はない
   * クライアントサイドで JWT アクセストークンを破棄してしまえば、いずれトークン有効期限が切れて再ログインが必要になる
   */
  public logout(): void {
    window.localStorage.removeItem(constants.localStorageKeyAuth);
    window.localStorage.removeItem(constants.localStorageKeyAccessToken);
    this.isLogined = false;
    console.log('Auth Guard : Logout');
  }
}
