import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PermissionListDto } from './dto/permission-list.dto';
import { QueryList } from 'src/common/utils/types';
import { Permission } from '@prisma/client';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { listToTree } from 'src/common/utils';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 权限列表
   * @param RoleListDto 查询权限列表DTO
   * @returns 返回用户权限列表 树形
   */
  async getList(data: PermissionListDto): Promise<any> {
    const result = await this.prisma.permission.findMany();
    const list = listToTree(result, { root: 0, pidKey: 'parentId' });
    return {
      list,
    };
  }

  /**
   * 创建权限
   * @param CreatePermissionDto 创建权限DTO
   * @returns 返回创建结果
   * @throws 创建permission失败返回异常
   */
  async create(data: CreatePermissionDto): Promise<string> {
    const { apiUrl, apiMethod, ...other } = data;
    const permission = await this.prisma.permission.create({
      data: {
        ...other,
        permissionApi: {
          create: {
            apiMethod: apiMethod || '',
            apiUrl: apiUrl || '',
          },
        },
      },
    });
    if (!permission) {
      throw new HttpException(
        '创建失败，请稍后重试',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    return '创建成功！';
  }

  /**
   * 编辑权限
   * @param dto 编辑权限DTO
   * @returns 返回编辑结果
   * @throws 权限不存在返回异常
   * @throws 更新权限表及api表失败返回异常
   */
  async edit(data: UpdatePermissionDto): Promise<string> {
    const { apiUrl, apiMethod, ...other } = data;
    const exist = await this.prisma.role.findUnique({ where: { id: data.id } });
    if (!exist) {
      throw new HttpException('权限不存在', HttpStatus.EXPECTATION_FAILED);
    }
    const permission = await this.prisma.permission.update({
      where: { id: data.id },
      data: {
        ...other,
        permissionApi: {
          update: {
            apiMethod: apiMethod || '',
            apiUrl: apiUrl || '',
          },
        },
      },
    });
    if (!permission) {
      throw new HttpException(
        '更新失败，请稍后重试',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    return '更新成功！';
  }

  /**
   * 删除权限
   * @param id 要删除的权限id
   * @returns 返回删除结果
   */
  async delete(id: number): Promise<string> {
    const exist = await this.prisma.permission.findUnique({ where: { id } });
    if (!exist) {
      throw new HttpException(
        '权限不存在或已删除',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    await this.prisma.permission.delete({
      where: { id },
      include: { permissionApi: true },
    });
    return '删除成功！';
  }
}
