import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleListDto } from './dto/role-list.dto';
import { QueryList } from 'src/common/utils/types';
import { Role } from '@prisma/client';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 角色列表
   * @param RoleListDto 查询角色列表DTO
   * @returns 返回角色列表 用户总数 当前页码 每页条数
   */
  async getList(data: RoleListDto): Promise<QueryList<Role>> {
    const { name, page = 1, pageSize = 10 } = data;
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    const where = name ? { name: { contains: name } } : null;
    const total = await this.prisma.role.count();
    const list = await this.prisma.role.findMany({
      skip,
      take,
      where,
    });
    return { list, total, page, pageSize };
  }

  /**
   * 创建角色
   * @param CreateRoleDto 创建角色DTO
   * @returns 成功返回"创建成功"
   * @returns 失败返回异常
   */
  async create(data: CreateRoleDto): Promise<string> {
    this.prisma
      .$transaction(async (tx) => {
        const role = await tx.role.create({ data });
        await tx.roleOnPermission.createMany({
          data: data.permissions.map((permissionId) => ({
            roleId: role.id,
            permissionId,
          })),
        });
      })
      .catch(() => {
        throw new HttpException(
          '创建失败，请稍后重试',
          HttpStatus.EXPECTATION_FAILED,
        );
      });
    return '创建成功！';
  }

  /**
   * 编辑角色
   * @param UpdateRoleDto 更新角色DTO
   * @returns 返回更新结果
   * @throws 当角色不存在或已删除时，抛出异常
   * @throws 当更新角色表或角色权限表失败时，抛出异常
   */
  async edit(data: UpdateRoleDto): Promise<string> {
    const { id, permissions, ...other } = data;
    const exist = await this.prisma.role.findUnique({ where: { id: data.id } });
    if (!exist) {
      throw new HttpException(
        '角色不存在或已删除',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const role = await this.prisma.role.update({
      where: { id: data.id },
      data: { ...other },
    });
    if (!role) {
      throw new HttpException(
        '更新失败，请稍后重试',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    if (permissions && permissions.length) {
      await this.prisma
        .$transaction([
          this.prisma.roleOnPermission.deleteMany({ where: { roleId: id } }),
          this.prisma.roleOnPermission.createMany({
            data: permissions.map((permissionId) => ({
              roleId: id,
              permissionId,
            })),
          }),
        ])
        .catch(() => {
          throw new HttpException(
            '更新失败，请稍后重试',
            HttpStatus.EXPECTATION_FAILED,
          );
        });
    }
    return '更新成功！';
  }

  /**
   * 删除角色
   * @param id 要删除的角色id
   * @returns 返回删除结果
   */
  async delete(id: number): Promise<string> {
    const exist = await this.prisma.role.findUnique({ where: { id } });
    if (!exist) {
      throw new HttpException(
        '角色不存在或已删除',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    await this.prisma.role.delete({ where: { id } });
    return '删除成功！';
  }
}
