import { databaseUrl } from '~/commons/database/database.url';
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '~/user/user.module';
import { AuthModule } from '~/auth/auth.module';
import { OrganizerModule } from './organizer/organizer.module';
import { CategoryModule } from './category/category.module';
import { EventModule } from './event/event.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    forwardRef(() => UserModule),
    AuthModule,
    OrganizerModule,
    CategoryModule,
    EventModule,
    MultimediaModule,
  ],
})
export class AppModule { }
