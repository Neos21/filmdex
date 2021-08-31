import { Component } from '@angular/core';

import { AuthGuard } from './shared/guards/auth.guard';

/** App Component */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authGuard: AuthGuard) { }
  
  /**
   * ログインしているか否か
   * 
   * @return ログインしていれば true・ログインしていなければ false
   */
  public isLogined(): boolean {
    return this.authGuard.isLogined;
  }
  
  /** 「Logout」ボタン押下時 : ログアウトする */
  public onLogout(): void {
    return this.authGuard.logout(true);
  }
}
