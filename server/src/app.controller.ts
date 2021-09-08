import { Controller, Get } from '@nestjs/common';

/** App Controller */
@Controller()
export class AppController {
  /** `/api` : API ルートパス */
  @Get('api')
  public apiRoot(): string {
    return 'FilmDeX API';
  }
}
