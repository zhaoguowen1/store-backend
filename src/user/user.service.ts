import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserListDto } from './dto/user-list.dto';
import { QueryList } from 'src/common/utils/types';
import { UpdateUserDto } from './dto/update-user.dto';
import { RedisService } from 'src/redis/redis.service';
import { getRedisKey } from 'src/common/utils';
import { RedisKeyPrefix } from 'src/common/enmus/redis-key.enum';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  /**
   * 获取用户列表
   * @param: UserListDto 查询条件
   * @returns 返回用户列表 用户总数 当前页码 每页条数
   */
  async getList(data: UserListDto): Promise<QueryList<Partial<User>>> {
    const { username, page = 1, pageSize = 10 } = data;
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    const where = username ? { username: { contains: username } } : null;
    const total = await this.prisma.user.count();
    const list = await this.prisma.user.findMany({
      skip,
      take,
      where,
      omit: { password: true, salt: true },
    });
    return { list, total, page, pageSize };
  }

  /**
   * 编辑用户
   * @param: UpdateUserDto 用户信息
   * @returns 返回编辑结果
   * @throws 用户不存在 数据库操作失败 返回异常
   */
  async edit(data: UpdateUserDto): Promise<string> {
    const { id, username, email, freezed, roleIds } = data;
    const exist = await this.prisma.user.findUnique({ where: { id } });
    if (!exist) {
      throw new HttpException('用户不存在', HttpStatus.EXPECTATION_FAILED);
    }
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        username,
        email,
        freezed,
      },
      omit: { password: true, salt: true },
    });
    if (roleIds && roleIds.length) {
      await this.prisma
        .$transaction([
          this.prisma.userOnRole.deleteMany({ where: { userId: id } }),
          this.prisma.userOnRole.createMany({
            data: roleIds.map((roleId) => ({ userId: id, roleId })),
          }),
        ])
        .catch(() => {
          throw new HttpException(
            '更新失败，请稍后重试',
            HttpStatus.EXPECTATION_FAILED,
          );
        });
    }
    await this.redis.set(
      getRedisKey(RedisKeyPrefix.USER_INFO, id),
      JSON.stringify(user),
      60 * 60 * 24,
    );
    return '更新成功！';
  }

  /**
   * 删除用户
   * @param: id 用户ID
   * @returns 返回删除结果
   * @throws 当用户不存在时，抛出异常
   * @throws 当删除失败时，抛出异常
   */
  async delete(id: number): Promise<string> {
    const exist = await this.prisma.user.findUnique({ where: { id } });
    if (!exist) {
      throw new HttpException('用户不存在', HttpStatus.EXPECTATION_FAILED);
    }
    await this.prisma
      .$transaction([
        this.prisma.user.delete({ where: { id } }),
        this.prisma.userOnRole.deleteMany({ where: { userId: id } }),
      ])
      .catch(() => {
        throw new HttpException(
          '删除失败，请稍后重试',
          HttpStatus.EXPECTATION_FAILED,
        );
      });
    return '删除成功';
  }

  /**
   * 冻结用户
   * @param: id 用户ID
   * @returns 返回冻结结果
   * @throws 当用户不存在时，抛出异常
   * @throws 当冻结失败时，抛出异常
   */
  async freezed(id: number): Promise<string> {
    const exist = await this.prisma.user.findUnique({ where: { id } });
    if (!exist) {
      throw new HttpException('用户不存在', HttpStatus.EXPECTATION_FAILED);
    }
    await this.prisma.user
      .update({
        where: { id },
        data: { freezed: exist.freezed === 0 ? 1 : 0 },
      })
      .catch(() => {
        throw new HttpException(
          '冻结失败，请稍后重试',
          HttpStatus.EXPECTATION_FAILED,
        );
      });
    return '冻结成功！';
  }

  /**
   * 根据ID查找用户信息
   *
   * @param id 用户ID
   * @returns 返回用户实体对象
   */
  async findOneById(id: number): Promise<Partial<User> | null> {
    let redisInfo = await this.redis.get(
      getRedisKey(RedisKeyPrefix.USER_INFO, id),
    );
    let user = redisInfo ? JSON.parse(redisInfo) : null;
    if (!user) {
      let user = await this.prisma.user.findUnique({
        where: { id },
        omit: { password: true, salt: true },
      });
      if (!user) return null;
      await this.redis.set(
        getRedisKey(RedisKeyPrefix.USER_INFO, id),
        JSON.stringify(user),
        60 * 60 * 24,
      );
    }
    return user;
  }

  /**
   * 获取用户信息
   * @params user 用户实体对象
   * @returns 返回用户信息
   */
  async getUserInfo(user: User): Promise<Record<string, any>> {
    const rolesRes = await this.prisma.userOnRole.findMany({
      where: { userId: user.id },
      include: { role: true },
    });
    if (!rolesRes.length) return { ...user, persmissions: [], roles: [] };
    const roleIds = rolesRes.map((i) => i.roleId);
    const persmissionsRes = await this.prisma.roleOnPermission.findMany({
      where: { roleId: { in: roleIds } },
      include: { permission: true },
    });
    const persmissions = persmissionsRes.length
      ? persmissionsRes.map((i) => ({
          id: i.permission.id,
          title: i.permission.title,
          type: i.permission.type,
          code: i.permission.code,
        }))
      : [];
    return { ...user, menus: persmissions, roles: roleIds };
  }
}
