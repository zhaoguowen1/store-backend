import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleListDto } from './dto/role-list.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller({
  path: 'role',
  version: '1',
})
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  // 角色列表
  @Post('list')
  list(@Body() dto: RoleListDto) {
    return this.roleService.getList(dto);
  }

  // 创建角色
  @Post('create')
  create(@Body() role: CreateRoleDto) {
    return this.roleService.create(role);
  }

  // 编辑角色
  @Post('edit')
  edit(@Body() role: UpdateRoleDto) {
    return this.roleService.edit(role);
  }

  // 删除角色
  @Get('delete')
  delete(@Query('id') id: number) {
    return this.roleService.delete(id);
  }
}
