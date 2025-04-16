import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

  getClient() {
    return this.redisClient;
  }

  async get(redisKey: string): Promise<string> {
    return await this.redisClient.get(redisKey);
  }

  async set(
    redisKey: string,
    value: string | number,
    seconds?: number,
  ): Promise<string> {
    return await this.redisClient.set(redisKey, value, 'EX', seconds);
  }

  async del(redisKey: string): Promise<number> {
    return await this.redisClient.del(redisKey);
  }

  async onModuleDestroy() {
    await this.redisClient.quit();
  }
}
