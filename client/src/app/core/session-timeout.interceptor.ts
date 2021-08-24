import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/** クッキーによるセッション管理とリクエストタイムアウトを有効にするための HttpClient インターセプタ */
@Injectable({ providedIn: 'root' })
export class SessionTimeoutInterceptor implements HttpInterceptor {
  /**
   * クッキーによるセッション管理とリクエストタイムアウトを有効にする
   * 
   * @param request リクエスト
   * @param next ハンドラ
   * @return HttpEvent の Observable
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({ withCredentials: true });
    return next.handle(request).pipe(timeout(2000));
  }
}
