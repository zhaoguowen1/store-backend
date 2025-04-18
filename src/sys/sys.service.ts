import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { compare, genSalt, hash } from 'bcryptjs';
import { RediskeyPrefix } from 'src/common/enmus/redis-key.enum';
import { getRedisKey } from 'src/common/utils';
import { PrismaService } from 'src/prisma/prisma.service';
import { RedisService } from 'src/redis/redis.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class SysService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  /**注册
   * @param createUserDto
   * @returns 返回用户信息
   * @throws 如果用户名或注册邮箱已存在，返回异常
   * @thorws 如果两次输入的密码不一致，返回异常
   * @thorws 如果验证码有误或已过期，返回异常
   */

  async registry(
    user: CreateUserDto,
  ): Promise<Omit<User, 'password' | 'salt'>> {
    let { username, password, confirmPassword, email, code } = user;
    const exist = await this.prisma.user.findUnique({
      where: {
        username,
        email,
      },
    });
    if (exist) {
      throw new HttpException('用户名或注册邮箱已存在', HttpStatus.CONFLICT);
    }
    if (confirmPassword !== password) {
      throw new HttpException(
        '两次输入的密码不一致',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const redisCode = await this.redis.get(
      getRedisKey(RediskeyPrefix.REGISTRY_CODE, email),
    );
    if (!redisCode || redisCode !== code) {
      throw new HttpException(
        '验证码有误或已过期',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const salt = await genSalt();
    password = await hash(password, salt);
    const {} = await this.prisma.user.create;
  }
}
