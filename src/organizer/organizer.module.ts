import { Module } from '@nestjs/common';
import { OrganizerController } from './organizer.controller';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [OrganizerController],
})
export class OrganizerModule { }
