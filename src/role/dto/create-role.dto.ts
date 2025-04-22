import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty({ message: '角色名称不能为空' })
  name: string;

  @IsOptional()
  desc?: string;

  @IsNotEmpty()
  @IsArray({ message: '角色权限必须为数组类型' })
  permissions: number[];
}
