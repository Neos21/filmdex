import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { constants } from '../shared/constants';

/** カスタム HttpClient インターセプタ */
@Injectable({ providedIn: 'root' })
export class CustomHttpInterceptor implements HttpInterceptor {
  /**
   * HttpClient からの通信の度に以下の割り込み処理を行う
   * 
   * @param request リクエスト
   * @param next ハンドラ
   * @return HttpEvent の Observable
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // クッキーによるセッション管理を有効にする
    request = request.clone({ withCredentials: true });
    
    // JWT アクセストークンが取得できればリクエストヘッダに設定する
    const accessToken = window.localStorage.getItem(constants.localStorageKeyAccessToken);
    if(accessToken) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
      });
    }
    
    // リクエストタイムアウトを設定する
    return next.handle(request).pipe(timeout(10000));
  }
}
