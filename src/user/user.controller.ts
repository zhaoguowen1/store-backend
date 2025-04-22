import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserListDto } from './dto/user-list.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';

@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 获取用户列表
  @Post('list')
  list(@Body() data: UserListDto) {
    return this.userService.getList(data);
  }

  // 编辑用户
  @Post('edit')
  edit(@Body() data: UpdateUserDto) {
    return this.userService.edit(data);
  }

  // 删除用户
  @Get('delete')
  delete(@Query('id') id: number) {
    return this.userService.delete(id);
  }

  // 冻结用户
  @Get('freezed')
  freezed(@Query('id') id: number) {
    return this.userService.freezed(id);
  }

  // 获取用户信息
  @Get('info')
  info(@Req() req: Request) {
    return this.userService.getUserInfo(req['user']);
  }
}
