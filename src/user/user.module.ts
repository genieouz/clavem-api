import { userModelName } from '~/user/user.model-name';
import { UserService } from '~/user/services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '~/user/models/schemas/user.schema';
import { Module, forwardRef } from '@nestjs/common';
import { ImagesModule } from '~/multimedia/images/images.module';
import { DatabaseModule } from '~/commons/database/database.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: userModelName, schema: UserSchema }]),
    forwardRef(() => ImagesModule),
  ],
  providers: [
    UserService,
  ],
  exports: [UserService, MongooseModule],
})
export class UserModule { }
