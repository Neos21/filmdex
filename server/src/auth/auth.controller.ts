import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

/** 認証ルーティング・コントローラ */
@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) { }
  
  /**
   * パスワード認証によるログイン・JWT アクセストークン発行
   * 
   * LocalAuthGuard → LocalStrategy#validate() (自動検知) にてパスワード認証する
   * 認証成功時は { userName: string; } が返され、メソッド中の req.user で参照できるので
   * コレを Payload に設定して JWT アクセストークンを発行する
   */
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req): Promise<any> {
    const payload: { userName: string; } = req.user;  // JWT に付与する Payload
    return { accessToken: this.jwtService.sign(payload) };  // ログイン成功時に JWT アクセストークンを返す
  }
  
  /**
   * JWT トークンがないとアクセスできないことの確認用エンドポイント
   * 
   * ```bash
   * $ curl -X GET 'http://localhost:3000/api/auth/profile'
   * {"statusCode":401,"message":"Unauthorized"}  # No Auth Token
   * 
   * $ jwt_access_token="$(curl -sS  -X POST -H 'Content-Type: application/json' 'http://localhost:3000/api/auth/login' -d '{"userName":"Neos21","password":"changethis"}' | jq -r '.accessToken')"
   * {"accessToken":"eyJhb..."}
   * 
   * $ curl -X GET -H "Authorization: Bearer ${jwt_access_token}" 'http://localhost:3000/api/auth/profile'
   * {"userName":"Neos21","password":"changethis","profile":"My Profile"}
   * {"statusCode":401,"message":"JWT Access Token Expired","error":"Unauthorized"}  # Token Expired
   * {"statusCode":401,"message":"Unauthorized"}  # Invalid Signature, Other Errors
   * ```
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public async getProfile(@Request() req): Promise<any> {
    return { ...req.user, profile: 'My Profile' };
  }
}
