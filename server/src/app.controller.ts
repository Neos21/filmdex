import { Controller, Get } from '@nestjs/common';

/** App Controller */
@Controller()
export class AppController {
  /** `/` : ルートパス */
  @Get()
  public root(): string {
    return 'FilmDeX Server';
  }
  
  /** `/api` : API ルートパス */
  @Get('api')
  public apiRoot(): string {
    return 'FilmDeX API';
  }
}
