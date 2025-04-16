import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.setGlobalPrefix(config.get<string>('API_PREFIX'));
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(config.get<number>('APP_PORT'));
}
bootstrap();
