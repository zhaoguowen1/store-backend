import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '账号不能为空' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  password: string;

  @IsNotEmpty({ message: '确认密码不能为空' })
  confirmPassword: string;

  @IsNotEmpty({ message: '邮箱不能为空' })
  email: string;

  @IsNotEmpty({ message: '验证码不能为空' })
  code: string;
}
