import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { constants } from './constants';
import { AuthService } from './auth.service';

/** 画面遷移時に認証チェックする */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /** ログイン試行したかどうか (セッションの有無) */
  public isLogined: boolean = false;
  
  constructor(private router: Router, private authService: AuthService) { }
  
  /**
   * 画面遷移前に認証チェックする
   * 
   * @param _next ActivatedRouteSnapshot
   * @param _state RouterStateSnapshot
   * @return 遷移してよければ true、遷移させたくなければ false を返す
   */
  public async canActivate(_activatedRouteSnapshot: ActivatedRouteSnapshot, _routerStateSnapshot: RouterStateSnapshot): Promise<boolean> {
    // ログイン済・セッション設定ができているようなので遷移を許可する
    if(this.isLogined) return true;
    
    try {
      await this.autoReLogin();
      this.isLogined = true;
      return true;
    }
    catch(error) {
      console.log('Auth Guard : Can Activate : Error : Redirect To Login Page', error);
      this.isLogined = false;
      this.router.navigate(['/login']);
      return false;
    }
  }
  
  /**
   * LocalStorage のデータを利用して自動で再ログインする
   * 
   * @throws 自動ログイン処理に失敗した場合
   */
  private async autoReLogin(): Promise<void> {
    const rawAuth = window.localStorage.getItem(constants.localStorageKey);
    if(!rawAuth) throw new Error('Auth Guard : Auto Re Login : Error : LocalStorage Is Empty');
    
    try {
      const auth = JSON.parse(rawAuth);
      await this.authService.login(auth.userName, auth.password);
      console.log('Auth Guard : Auto Re Login : Success');
    }
    catch(error) {
      console.error('Auth Guard : Auto Re Login : Error', error);
      throw error;
    }
  }
}
