import {
  Body,
  Get,
  Query,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SysService } from './sys.service';
import { AllowNoToken } from 'src/common/decorators/token.decorator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { ForgotUserDto } from './dto/forgot-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller({
  path: 'sys',
  version: '1',
})
export class SysController {
  constructor(private readonly sysService: SysService) {}

  // 用户注册
  @Post('registry')
  @AllowNoToken()
  registry(@Body() data: CreateUserDto) {
    return this.sysService.registry(data);
  }

  // 用户登录
  @Post('login')
  @AllowNoToken()
  login(@Body() data: LoginUserDto) {
    return this.sysService.login(data);
  }

  // 找回密码
  @Post('forgot')
  @AllowNoToken()
  forgot(@Body() forgotUserDto: ForgotUserDto) {
    return this.sysService.forgot(forgotUserDto);
  }

  // 发送找回密码邮箱验证码
  @Get('sendEmailForGorgot')
  @AllowNoToken()
  sendEmailForGorgot(@Query() dto: { email: string }) {
    return this.sysService.sendEmailForGorgot(dto.email, '找回密码验证码');
  }

  // 发送注册邮箱验证码
  @Get('sendEmailForRegistry')
  @AllowNoToken()
  sendEmailForRegistry(@Query() dto: { email: string }) {
    return this.sysService.sendMailForRegistry(dto.email, '注册验证码');
  }

  // 上传文件
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: { type: string },
  ) {}
}
