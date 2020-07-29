import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CommentService } from '~/comment/comment.service';
import { CommentEntity } from "~/comment/dto/comment.entity";
import { CommentDto } from '~/comment/dto/comment.dto';
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { IUser } from "~/user/interfaces/user.interface";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "~/auth/guards/auth-guard";
import { ForRoles } from "~/auth/decorators/for-roles.decorator";
import { UserRoles } from "~/user/enums/user-roles.enum";

@UseGuards(AuthGuard)
@Resolver()
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(returns => CommentEntity)
  public async createComment(
    @Args({ name: 'commentInput', type: () => CommentDto })
    commentDto: CommentDto,
    @CurrentUser() currentUser: IUser,
  ): Promise<CommentEntity> {
    return this.commentService.insertOne({
      ...commentDto,
      sender: currentUser._id,
    });
  }

  @Query(returns => [CommentEntity])
  public async fetchComments(
    @CurrentUser() currentUser: IUser,
  ): Promise<CommentEntity[]> {
    return this.commentService.find({
      $or: [{ sender: currentUser._id }, { destinataire: currentUser._id }],
    });
  }

  @ForRoles(UserRoles.USER)
  @Query(returns => [CommentEntity])
  public async fetchClientComments(
    @CurrentUser() currentUser: IUser,
  ): Promise<CommentEntity[]> {
    return this.commentService.find({
      $or: [{ sender: currentUser._id }, { destinataire: currentUser._id }],
    });
  }
}