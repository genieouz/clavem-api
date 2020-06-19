import { Resolver, Query, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { AccessCodesEntity } from "~/access-code/entity/access-codes.entity";
import { AccessCodeService } from "~/access-code/access-code.service";
import { ForRoles } from "~/auth/decorators/for-roles.decorator";
import { UserRoles } from "~/user/enums/user-roles.enum";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { IUser } from "~/user/interfaces/user.interface";
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { AccessCodeEntity } from "~/access-code/entity/access-code.entity";
import { AccessCodeDto } from "~/access-code/dto/access-code.dto";
import { UserEntity } from "~/user/entities/user.entity";
import { UserService } from "~/user/services/user.service";
import { IAccessCode } from "~/access-code/models/interface/access-code.interface";

@Resolver(of => AccessCodeEntity)
export class AccessCodePropertyResolver {
    constructor(
        private readonly accessCodeService: AccessCodeService,
        private readonly userService: UserService,
    ) { }

    @ResolveProperty(returns => UserEntity)
    organizer(
        @Parent() accessCode: IAccessCode,
    ): Promise<UserEntity> {
        return this.userService.findOneById(accessCode.organizer);
    }
}