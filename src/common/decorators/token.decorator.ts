import { SetMetadata } from '@nestjs/common';

// 接口允许无token访问
export const ALLOW_NO_TOKEN = 'allowNoToken';
export const AllowNoToken = () => SetMetadata(ALLOW_NO_TOKEN, true);
