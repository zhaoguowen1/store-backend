import { IsOptional } from 'class-validator';
import { QueryParams } from 'src/common/utils/types';

export class UserListDto extends QueryParams {
  @IsOptional()
  username?: string;
}
