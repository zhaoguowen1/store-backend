import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePermissionDto {
  @IsNotEmpty({ message: '权限名称不能为空' })
  title: string;

  @IsNotEmpty({ message: '权限码不能为空' })
  code: string;

  @IsNotEmpty({ message: '权限类型不能为空' })
  type: number;

  @IsNotEmpty({ message: '父级id不能为空' })
  parentId: number;

  @IsOptional()
  apiUrl?: string;

  @IsOptional()
  apiMethod?: string;
}
