import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { SysModule } from './sys/sys.module';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HttpExceptionsFilter } from './common/filters/http-exceptions.filter';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.development',
    }),
    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        host: configService.get('REDIS_HOST'),
        port: +configService.get('REDIS_PORT'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    SysModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_INTERCEPTOR',
      useClass: ResponseInterceptor,
    },
    {
      provide: 'APP_FILTER',
      useClass: HttpExceptionsFilter,
    },
  ],
})
export class AppModule {}
