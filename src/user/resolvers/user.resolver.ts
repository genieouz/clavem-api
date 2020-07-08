import { Resolver, Query } from "@nestjs/graphql";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { IUser } from "../interfaces/user.interface";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "~/auth/guards/auth-guard";
import { UserEntity } from "~/user/entities/user.entity";
import { UsersEntity } from "../entities/users.entity";
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { UserService } from "../services/user.service";
import { UserRoles } from "../enums/user-roles.enum";

@UseGuards(AuthGuard)
@Resolver()
export class UserResover {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Query(returns => UserEntity)
    fetchCurrentUser(
        @CurrentUser() currentUser: IUser
    ): IUser {
        return currentUser;
    }

    @Query(returns => UsersEntity)
    fetchAdmins(): Promise<FindManyResult<UserEntity>> {
        return this.userService.findMany({ role: UserRoles.ADMIN });
    }

    @Query(returns => UsersEntity)
    fetchClients(): Promise<FindManyResult<UserEntity>> {
        return this.userService.findMany({ role: UserRoles.USER });
    }
}   