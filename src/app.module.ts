import { databaseUrl } from '~/commons/database/database.url';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from '~/user/user.module';
import { AuthModule } from '~/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule { }
