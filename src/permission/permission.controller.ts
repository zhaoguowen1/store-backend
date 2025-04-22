import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionListDto } from './dto/permission-list.dto';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Controller({
  path: 'permission',
  version: '1',
})
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  // 列表
  @Post('list')
  getPermissionList(@Body() dto: PermissionListDto) {
    return this.permissionService.getList(dto);
  }

  // 创建
  @Post('create')
  create(@Body() dto: CreatePermissionDto) {
    return this.permissionService.create(dto);
  }

  // 编辑
  @Post('edit')
  edit(@Body() dto: UpdatePermissionDto) {
    return this.permissionService.edit(dto);
  }

  // 删除
  @Get('delete')
  delete(@Query('id') id: number) {
    return this.permissionService.delete(id);
  }
}
