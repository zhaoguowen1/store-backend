import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { User } from 'generated/prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      // 表示从header中的Authorization的Bearer表头中获取token值
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 不忽视token过期的情况，过期会返回401
      ignoreExpiration: false,
      // 读取配置中的secret
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: User) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new HttpException('用户不存在', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
