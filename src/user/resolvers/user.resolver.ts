import { User } from '../dto/user.type';
import { IUser } from '~/user/interfaces/user.interface';
import { UserService } from '~/user/services/user.service';
import { Resolver } from "type-graphql";
import { Query } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [User])
  public async fetchUsers(): Promise<IUser[]> {
    return this.userService.findMany({});
  }
}
