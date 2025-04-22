import { IsOptional } from 'class-validator';
import { QueryParams } from 'src/common/utils/types';

export class PermissionListDto extends QueryParams {
  @IsOptional()
  name?: string;
}
