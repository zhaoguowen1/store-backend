import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcryptjs';
import { RedisKeyPrefix } from 'src/common/enmus/redis-key.enum';
import { getRedisKey } from 'src/common/utils';
import { PrismaService } from 'src/prisma/prisma.service';
import { RedisService } from 'src/redis/redis.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { AuthService } from 'src/auth/auth.service';
import { ForgotUserDto } from './dto/forgot-user.dto';
import { EmailService } from 'src/common/services/email.service';
import { User } from '@prisma/client';

@Injectable()
export class SysService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly authService: AuthService,
    private readonly emailService: EmailService,
  ) {}

  /**注册
   * @param createUserDto 用户信息
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
      getRedisKey(RedisKeyPrefix.REGISTRY_CODE, email),
    );
    if (!redisCode || redisCode !== code) {
      throw new HttpException(
        '验证码有误或已过期',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const salt = await genSalt();
    password = await hash(password, salt);
    const {
      password: _,
      salt: __,
      ...userInfo
    } = await this.prisma.user.create({
      data: {
        username,
        password,
        salt,
        email,
      },
    });
    await this.redis.set(
      getRedisKey(RedisKeyPrefix.USER_INFO, userInfo.id),
      JSON.stringify(userInfo),
      60 * 60 * 24,
    );
    const defaultRole = await this.prisma.role.findUnique({
      where: {
        name: '服务员',
      },
    });
    if (defaultRole) {
      await this.prisma.userOnRole.create({
        data: {
          userId: userInfo.id,
          roleId: defaultRole.id,
        },
      });
    }
    return userInfo;
  }

  /**登录
   * @param loginUserDto 登录信息
   * @returns 返回token
   * @throws 用户名或密码有误，返回异常
   * @thorws 被冻结，返回异常
   */
  async login(loginInfo: LoginUserDto): Promise<{ access_token: string }> {
    const { username, password } = loginInfo;
    const exist = await this.prisma.user.findUnique({
      where: { username },
    });
    if (!exist) {
      throw new HttpException(
        '用户名或密码有误',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const checkPassword = await compare(password, exist.password);
    if (!checkPassword) {
      throw new HttpException(
        '用户名或密码有误',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    if (exist.freezed) {
      throw new HttpException(
        '账号已被冻结，请联系管理员',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const { password: _, salt: __, ...userInfo } = exist;
    const access_token = this.authService.generateAccessToken(userInfo);
    return { access_token };
  }

  /**
   * 忘记密码
   *
   * @param ForgotUserDto 用户对象
   * @returns 修改成功信息
   * @throws 验证码错误或已过期，用户不存在或已删除，用户已被冻结，两次输入的密码不一致，修改失败
   */
  async forgot(info: ForgotUserDto): Promise<string> {
    const { username, password, confirmPassword, code } = info;
    if (password !== confirmPassword) {
      throw new HttpException(
        '两次输入的密码不一致',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const exist = await this.prisma.user.findUnique({
      where: { username },
    });
    if (!exist) {
      throw new HttpException('用户不存在', HttpStatus.EXPECTATION_FAILED);
    }
    if (exist.freezed) {
      throw new HttpException(
        '用户已被冻结，请解冻后再修改',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const redisCode = await this.redis.get(
      getRedisKey(RedisKeyPrefix.PASSWORD_RESET_CODE, exist.id),
    );
    if (!redisCode || redisCode !== code) {
      throw new HttpException(
        '验证码错误或已过期',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const salt = await genSalt();
    const newPassword = await hash(password, salt);
    try {
      await this.prisma.user.update({
        where: {
          id: exist.id,
        },
        data: {
          password: newPassword,
          salt,
        },
      });
    } catch (error) {
      throw new HttpException(
        '修改失败，请稍后重试',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    this.redis.del(getRedisKey(RedisKeyPrefix.PASSWORD_RESET_CODE, exist.id));
    this.redis.del(getRedisKey(RedisKeyPrefix.USER_INFO, exist.id));
    return '修改成功，请重新登录';
  }

  /**
   * 发送注册邮件验证码
   *
   * @param email 邮箱地址
   * @param text 邮件内容
   * @returns 返回发送成功信息
   */
  async sendMailForRegistry(email: string, text: string) {
    const { code } = await this.emailService.sendEmail(email, text);
    // 保存验证码到redis中，设置过期时间为5分钟
    await this.redis.set(
      getRedisKey(RedisKeyPrefix.REGISTRY_CODE, email),
      code,
      60 * 5,
    );
    return '发送成功';
  }

  /**
   * 发送重置密码邮件验证码
   * @param email 用户邮箱
   * @param text 邮件内容
   * @returns 返回验证码已发送至邮箱的提示信息
   * @throws 当邮箱为空时，抛出 HttpException 异常
   * @throws 当当前用户未绑定该邮箱时，抛出 HttpException 异常
   */
  async sendEmailForGorgot(email: string, text: string) {
    if (!email) {
      throw new HttpException('邮箱不能为空', HttpStatus.EXPECTATION_FAILED);
    }
    const exists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!exists) {
      throw new HttpException(
        '当前用户未绑定该邮箱，请检查后重试',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const { code } = await this.emailService.sendEmail(email, text);
    // 保存验证码到redis中，设置过期时间为5分钟
    await this.redis.set(
      getRedisKey(RedisKeyPrefix.PASSWORD_RESET_CODE, exists.id),
      code,
      60 * 5,
    );
    return '验证码已发送至邮箱，请注意查收';
  }
}
