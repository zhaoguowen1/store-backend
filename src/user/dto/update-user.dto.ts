import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'ID不能为空' })
  id: number;

  @IsOptional()
  username?: string;

  @IsOptional()
  @IsEmail({}, { message: '邮箱格式不正确' })
  email?: string;

  @IsOptional()
  @IsNumber({}, { message: '冻结状态必须为number类型' })
  freezed?: number;

  roles?: number[];
}
