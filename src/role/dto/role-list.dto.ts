import { IsOptional } from 'class-validator';
import { QueryParams } from 'src/common/utils/types';

export class RoleListDto extends QueryParams {
  @IsOptional()
  name?: string;
}
