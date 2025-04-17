import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'generated/prisma';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(payload: { id: number }): Promise<User> {
    return await this.userService.findOneById(payload.id);
  }

  // 生成token
  generateAccessToken(payload: Record<string, any>): string {
    return this.jwtService.sign(payload);
  }

  // 验证token
  verifyToken(token: string): string {
    if (!token) return null;
    const id = this.jwtService.verify(token.replace('Bearer ', ''));
    return id;
  }
}
