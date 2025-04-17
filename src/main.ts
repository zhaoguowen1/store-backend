import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.setGlobalPrefix(config.get<string>('API_PREFIX'));
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    cors({
      // * 允许所有域名访问 * 获取不到session
      // Access-Control-Allow-Origin
      origin: ['http://localhost:3000'],
      // Access-Control-Allow-Methods
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      // 预检请求 Option请求(1. 自定义请求 2. Content-Type: applicantion/json 3. patch put delete) Access-Control-Allow-Headers
      // allowedHeaders: ['Content-Type'],
      // Access-Control-Allow-Credentials
      credentials: true, // 是否允许发送cookie
      // 自定义响应头
      // exposedHeaders: ['gw'],
    }),
  );
  await app.listen(config.get<number>('APP_PORT'));
}
bootstrap();
