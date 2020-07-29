import { CommentService } from '~/comment/comment.service';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { commentModelName } from '~/comment/models/comment.model-name';
import { commentSchema } from '~/comment/models/schemas/comment.schema'
import { CommentResolver } from '~/comment/resolvers/comment.resolver';
import { CommentPropertyResolver } from './resolvers/comment-property.resolver';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: commentModelName, schema: commentSchema },
    ]),
    forwardRef(() => UserModule)
  ],
  controllers: [],
  providers: [CommentService, CommentResolver, CommentPropertyResolver],
})
export class CommentModule {}
