import { SetMetadata } from '@nestjs/common';

// 接口允许无token访问
export const AllowNoToken = () => SetMetadata('allowNoToken', true);
