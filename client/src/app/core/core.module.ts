import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SessionTimeoutInterceptor } from './session-timeout.interceptor';

/** Core Module */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // クッキーによるセッション管理とリクエストタイムアウトを有効にする
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionTimeoutInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
