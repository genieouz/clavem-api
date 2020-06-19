import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "~/auth/guards/auth-guard";
import { AccessCodesEntity } from "~/access-code/entity/access-codes.entity";
import { AccessCodeService } from "~/access-code/access-code.service";
import { ForRoles } from "~/auth/decorators/for-roles.decorator";
import { UserRoles } from "~/user/enums/user-roles.enum";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { IUser } from "~/user/interfaces/user.interface";
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { AccessCodeEntity } from "~/access-code/entity/access-code.entity";
import { AccessCodeDto } from "../dto/access-code.dto";

@UseGuards(AuthGuard)
@Resolver()
export class AccessCodeResolver {
    constructor(
        private readonly accessCodeService: AccessCodeService,
    ) { }

    @ForRoles(UserRoles.ORGANIZER)
    @Query(returns => AccessCodesEntity)
    fetchAccessCodes(
        @CurrentUser() currentUser: IUser
    ): Promise<FindManyResult<AccessCodeEntity>> {
        return this.accessCodeService.findMany({ organizer: currentUser._id });
    }

    @ForRoles(UserRoles.ORGANIZER)
    @Mutation(returns => AccessCodeEntity)
    createAccessCode(
        @Args({ name: 'accessCodeDto', type: () => AccessCodeDto }) accessCodeDto: AccessCodeDto,
        @CurrentUser() currentUser: IUser
    ): Promise<AccessCodeEntity> {
        return this.accessCodeService.insertOne({ organizer: currentUser._id, ...accessCodeDto });
    }
}