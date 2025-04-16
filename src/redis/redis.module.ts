import {
  DynamicModule,
  Global,
  Module,
  ModuleMetadata,
  Provider,
} from '@nestjs/common';
import { RedisService } from './redis.service';
import Redis, { RedisOptions } from 'ioredis';

const REDIS_CLIENT = 'REDIS_CLIENT';

interface RedisModuleOptions extends RedisOptions {}

interface RedisModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (
    ...args: any[]
  ) => Promise<RedisModuleOptions> | RedisModuleOptions;
  inject?: any[];
}

@Global()
@Module({})
export class RedisModule {
  static forRoot(options: RedisModuleOptions): DynamicModule {
    const redisProvider: Provider = {
      provide: REDIS_CLIENT,
      useValue: new Redis(options),
    };
    return {
      module: RedisModule,
      providers: [redisProvider, RedisService],
      exports: [redisProvider, RedisService],
    };
  }

  static forRootAsync(options: RedisModuleAsyncOptions): DynamicModule {
    const { inject, useFactory } = options;
    const redisProvider: Provider = {
      provide: REDIS_CLIENT,
      useFactory: async (...args): Promise<Redis> => {
        const redisOptions = await useFactory(...args);
        const redisClient = new Redis(redisOptions);
        redisClient.on('connect', () => console.log('redis连接成功'));
        redisClient.on('error', (err) => console.error(err));
        return redisClient;
      },
      inject,
    };
    return {
      module: RedisModule,
      providers: [redisProvider, RedisService],
      exports: [redisProvider, RedisService],
    };
  }
}
