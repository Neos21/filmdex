import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { environment } from '../../../environments/environment';

/** 画面遷移時に認証チェックする */
@Injectable()
export class AuthGuard implements CanActivate {
  /** ログインしているか否か */
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
    return await this.reLogin();  // 初回表示時は LocalStorage のデータを使用して自動再ログイン (JWT アクセストークン再発行) を試行する
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
      
      window.localStorage.setItem('auth'       , JSON.stringify(auth));
      window.localStorage.setItem('accessToken', accessToken);
      this.isLogined = true;
    }
    catch(error) {
      console.error('Auth Guard : Login', error);
      throw error;
    }
  }
  
  /**
   * LocalStorage に保存されている User Name・Password を利用して再ログイン (JWT アクセストークン再発行) する
   * 
   * @return 再ログインに成功し遷移を許可する場合は true・遷移を許可しない場合は false を返しつつ「ログイン」画面に遷移させる
   */
  public async reLogin(): Promise<boolean> {
    try {
      const rawAuth = window.localStorage.getItem('auth');
      if(!rawAuth) throw new Error('LocalStorage Is Empty, Cannot Re Login');
      
      const auth = JSON.parse(rawAuth);
      await this.login(auth.userName, auth.password);
      return true;
    }
    catch(error) {
      // 自動再ログインができなければ明示的にログアウト状態にしログインページに遷移する
      console.warn('Auth Guard : Re Login : Failed, Redirect To Login Page', error);
      this.logout(true);
      return false;
    }
  }
  
  /**
   * ログアウトする
   * 
   * サーバサイドは JWT アクセストークンにて認証しているため、サーバサイドにはログアウトの概念はない
   * クライアントサイドで JWT アクセストークンを破棄してしまえば、いずれトークン有効期限が切れて再ログインが必要になる
   * 
   * @param needsNavigateToLoginPage true を指定した場合は「ログイン」画面への遷移も行う
   */
  public logout(needsNavigateToLoginPage: boolean = false): void {
    window.localStorage.removeItem('auth');
    window.localStorage.removeItem('accessToken');
    this.isLogined = false;
    if(needsNavigateToLoginPage) this.router.navigate(['/admin/login']);
  }
}
