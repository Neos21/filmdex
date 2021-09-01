import { Controller, Post, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { ExportToJsonService } from './export-to-json.service';

/** 映画情報の SQLite DB ファイルを JSON ファイルにエクスポートするルーティング・コントローラ */
@Controller('export-to-json')
export class ExportToJsonController {
  constructor(private exportToJsonService: ExportToJsonService) { }
  
  /**
   * 映画情報の SQLite DB ファイルを JSON ファイルにエクスポートする
   * 
   * @return 出力した JSON ファイルのフルパス・エラー時はエラーオブジェクト
   */
   @UseGuards(JwtAuthGuard)
   @Post()
   public async create(): Promise<{ savedJsonFilePaths?: Array<string>; error?: any; }> {
     return this.exportToJsonService.exportToJson();
   }
}
