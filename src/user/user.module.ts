import { ProfileResolver } from './resolvers/profile.resolver';
import { UserResolver } from '~/user/resolvers/user.resolver';
import { userModelName } from '~/user/user.model-name';
import { UserService } from '~/user/services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '~/user/user.schema';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: userModelName, schema: UserSchema }]),
  ],
  providers: [UserService, UserResolver, ProfileResolver],
  exports: [UserService, MongooseModule],
})
export class UserModule {}
