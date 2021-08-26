import { Component } from '@angular/core';

import { AuthGuard } from './shared/auth.guard';

/** App Component */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authGuard: AuthGuard) { }
  
  /** ログインしているか否か */
  public isLogined(): boolean {
    return this.authGuard.isLogined;
  }
  
  /** 「Logout」ボタン押下時 */
  public onLogout(): void {
    return this.authGuard.logout(true);
  }
}
