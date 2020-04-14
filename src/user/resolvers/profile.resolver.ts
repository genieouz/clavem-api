import { UserInput } from '~/user/dto/user.input';
import { User } from '~/user/dto/user.type';
import { GraphqlAuthGuard } from '~/auth/auth.guard';
import { IUser } from '~/user/interfaces/user.interface';
import { UserService } from '~/user/services/user.service';
import { Resolver } from 'type-graphql';
import { Mutation, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';

@UseGuards(GraphqlAuthGuard)
@Resolver()
export class ProfileResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(returns => User)
  public async updateProfile(
    @Args({ name: 'userInput', type: () => UserInput }) userInput: UserInput,
    @CurrentUser() currentUser: IUser,
  ): Promise<IUser> {
    return this.userService.updateOneById(currentUser._id, userInput);
  }

  @Query(returns => User)
  public async fetchProfile(
      @CurrentUser() currentUser: IUser,
  ): Promise<IUser> {
    return currentUser;
  }
}
