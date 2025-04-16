import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { ALLOW_NO_TOKEN } from 'src/common/decorators/token.decorator';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly reflector: Reflector,
    private readonly authService: AuthService,
  ) {
    super();
  }

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    // 接口是否允许无token访问
    const allowNoToKen = this.reflector.getAllAndOverride<boolean>(
      ALLOW_NO_TOKEN,
      [ctx.getHandler(), ctx.getClass()],
    );
    if (allowNoToKen) return true;
    // 验证用户是否登录
    const req = ctx.switchToHttp().getRequest();
    const access_token = req.get('Authorization');
    if (!access_token)
      throw new HttpException('账号未登录', HttpStatus.UNAUTHORIZED);
    const userId = this.authService.verifyToken(access_token);
    // 判断是否登录过期
    if (!userId)
      throw new HttpException('登录过期，请重新登录', HttpStatus.UNAUTHORIZED);
    return super.canActivate(ctx) as Promise<boolean>;
  }
}
