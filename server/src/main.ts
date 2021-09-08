import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

/** サーバ起動 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS 設定
  app.enableCors({
    origin: 'http://localhost:4200',  // Angular 開発サーバ
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    credentials: true
  });
  // 全てのパスの先頭に /api を付ける・トップのみヘルスチェック用に許可する (ServeStaticModule は自動的に処理される)
  app.setGlobalPrefix('api', {
    exclude: [
      { path: 'api', method: RequestMethod.GET }
    ]
  });
  
  await app.listen(2323);
  console.log('FilmDeX Server Started At Port 2323');
}
bootstrap();
