import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 根据ID查找用户信息
   *
   * @param id 用户ID
   * @returns 返回用户实体对象
   */
  async findOneById(id: number): Promise<User> {
    const user = this.prisma.user.findUnique({ where: { id } });
    return user || null;
  }
}
