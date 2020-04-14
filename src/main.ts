import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_PORT } from './commons/config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(API_PORT);
}
bootstrap();
