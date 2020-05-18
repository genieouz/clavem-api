import { databaseUrl } from '~/commons/database/database.url';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '~/user/user.module';
import { AuthModule } from '~/auth/auth.module';
import { OrganizerModule } from './organizer/organizer.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserModule,
    AuthModule,
    OrganizerModule,
    CategoryModule,
  ],
  controllers: [],
})
export class AppModule { }
