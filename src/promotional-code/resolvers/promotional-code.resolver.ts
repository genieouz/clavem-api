import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "~/auth/guards/auth-guard";
import { PromotionalCodeEntity } from "../entity/promotional-code.entity";
import { PromotionalCodeDto } from "../dto/promotional-code.dto";
import { PromotionalCodeService } from "../promotional-code.service";
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { IUser } from "~/user/interfaces/user.interface";
import { EventService } from "~/event/event.service";
import { UserRoles } from "~/user/enums/user-roles.enum";
import { PromotionalCodesEntity } from "../entity/promotional-codes.entity";

@Resolver()
@UseGuards(AuthGuard)
export class PromotionalCodeResolver {
    constructor(
        private readonly promotionalCodeService: PromotionalCodeService,
        private readonly eventService: EventService,
    ) { }

    @Mutation(returns => PromotionalCodeEntity)
    createPromotionalCode(
        @Args({ name: 'promotionalCodeDto', type: () => PromotionalCodeDto }) promotionalCodeDto
    ): Promise<PromotionalCodeEntity> {
        return this.promotionalCodeService.insertOne(promotionalCodeDto);
    }

    @Query(returns => PromotionalCodesEntity)
    async fetchPromotionalCodes(
        @CurrentUser() currentUser: IUser,
    ): Promise<FindManyResult<PromotionalCodeEntity>> {
        const filterOnCreatedBy = currentUser.role === UserRoles.ORGANIZER ? { createdBy: currentUser._id } : {};
        const events = (await this.eventService.findMany(filterOnCreatedBy)).records;
        const eventIds = events.map(event => {
            return event._id;
        });
        return this.promotionalCodeService.findMany({ eventId: { $in: eventIds } });
    }

}