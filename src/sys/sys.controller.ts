import { Body, Controller, Post } from '@nestjs/common';
import { SysService } from './sys.service';
import { AllowNoToken } from 'src/common/decorators/token.decorator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller({
  path: 'sys',
  version: '1',
})
export class SysController {
  constructor(private readonly sysService: SysService) {}

  // 用户注册
  @Post('registry')
  @AllowNoToken()
  registry(@Body() user: CreateUserDto) {
    return this.sysService.registry(user);
  }
}
