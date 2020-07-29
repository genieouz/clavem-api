import { Parent, ResolveProperty, Resolver } from "@nestjs/graphql";
import { EventEntity } from "~/event/entity/event.entity";
import { UserEntity } from "~/user/entities/user.entity";
import { UserService } from "~/user/services/user.service";
import { CommentService } from "../comment.service";
import { CommentEntity } from "../dto/comment.entity";
import { IComment } from "../models/interfaces/comment.interface";


@Resolver(of => CommentEntity)
export class CommentPropertyResolver {
  constructor(
    private readonly commentService: CommentService,
    private readonly userService: UserService,
  ) {}

  @ResolveProperty(returns => UserEntity)
  sender(@Parent() comment: IComment): Promise<UserEntity> {
    return this.userService.findOneById(comment.sender);
  }

  @ResolveProperty(returns => UserEntity)
  destinataire(@Parent() comment: IComment): Promise<UserEntity> {
    return this.userService.findOneById(comment.destinataire);
  }
}
