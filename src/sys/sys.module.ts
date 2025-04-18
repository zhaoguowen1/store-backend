import { Module } from '@nestjs/common';
import { SysService } from './sys.service';
import { SysController } from './sys.controller';
import { AuthModule } from 'src/auth/auth.module';
import { EmailService } from 'src/common/services/email.service';

@Module({
  imports: [AuthModule],
  controllers: [SysController],
  providers: [SysService, EmailService],
})
export class SysModule {}
