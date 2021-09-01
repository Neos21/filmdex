import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LocalAuthGuard } from './local-auth.guard';
import { AuthInfo } from './auth-info';

/** 認証ルーティング・コントローラ */
@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) { }
  
  /**
   * パスワード認証によるログインを行い JWT アクセストークンを発行する
   * 
   * LocalAuthGuard → LocalStrategy#validate() (自動検知) にてパスワード認証する
   * 認証成功時は { userName: string; } が返され、メソッド中の req.user で参照できるので
   * コレを Payload に設定して JWT アクセストークンを発行する
   * 
   * @param req リクエスト
   * @return JWT アクセストークン
   */
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public login(@Request() req): { accessToken: string; } {
    const payload: AuthInfo = req.user;  // JWT に付与する Payload・new AuthInfo() で作ると Expected "payload" to be a plain object. エラーになる
    return { accessToken: this.jwtService.sign(payload) };  // ログイン成功時に JWT アクセストークンを返す
  }
}
