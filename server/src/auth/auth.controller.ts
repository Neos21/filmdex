import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './local-auth.guard';

/** 認証ルーティング・コントローラ */
@Controller('auth')
export class AuthController {
  /** ログイン */
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req): Promise<any> {
    return req.user;  // コレでログイン成功時は { userName: string; password: string; } の情報が返る
  }
}
