import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateRoleDto {
  @IsNotEmpty({ message: '角色id不能为空' })
  id: number;

  @IsOptional()
  name?: string;

  @IsOptional()
  desc?: string;

  @IsOptional()
  @IsArray({ message: '角色权限必须为数组类型' })
  permissions?: number[];
}
