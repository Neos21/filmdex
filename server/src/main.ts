import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS 設定
  app.enableCors({
    origin: 'http://localhost:4200',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    credentials: true
  });
  // 全てのパスの先頭に /api を付ける・トップのみヘルスチェック用に許可する
  app.setGlobalPrefix('api', {
    exclude: [
      { path: ''   , method: RequestMethod.GET },
      { path: 'api', method: RequestMethod.GET }
    ]
  });
  
  await app.listen(3000);
}
bootstrap();
