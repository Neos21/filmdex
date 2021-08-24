import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全てのパスの先頭に /api を付ける・トップの / のみヘルスチェック用に許可する
  app.setGlobalPrefix('api', {
    exclude: [
      { path: ''   , method: RequestMethod.GET },
      { path: 'api', method: RequestMethod.GET }
    ]
  });
  
  await app.listen(3000);
}
bootstrap();
