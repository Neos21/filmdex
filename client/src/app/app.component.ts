import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

/** App Component */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** タイトルのリンク先パス */
  public destPath: string = '/';
  
  constructor(private router: Router) { }
  
  /** 画面初期表示時の処理 */
  public ngOnInit(): void {
    // Router 定義の中に Admin Router の内容があれば、現在画面に応じてタイトルのリンク先パスを変更するようにする
    if(this.router.config.find((route) => route.path === 'admin')) {
      console.log('App Component : Admin Router Detected');
      this.router.events.subscribe((event) => {
        if(event instanceof NavigationEnd) this.destPath = event.urlAfterRedirects.includes('/admin') ? '/' : '/admin';
      });
    }
  }
}
