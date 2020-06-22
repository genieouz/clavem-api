import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ID } from 'type-graphql';
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { EventsEntity } from "../entity/events.entity";
import { EventEntity } from "../entity/event.entity";
import { EventService } from "../event.service";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { IUser } from "~/user/interfaces/user.interface";
import { UserRoles } from "~/user/enums/user-roles.enum";
import { ForRoles } from "~/auth/decorators/for-roles.decorator";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "~/auth/guards/auth-guard";
import { RolesGuard } from "~/auth/guards/roles.guard";
import { OrderByDirection } from "~/commons/graphql/types-and-inputs/order-by-direction";
import { AnyObject } from "~/commons/typings/typescript";
import { EventState } from "../enums/event-state.enum";
import { EventStatus } from "../enums/event-status.enum";
import { TicketDto } from "../dto/ticket.dto";
import { IUpdateResult } from "~/commons/typings/mongoose.typings";

@UseGuards(AuthGuard, RolesGuard)
@Resolver()
export class EventResolver {
    constructor(private readonly eventService: EventService) { }

    @ForRoles(UserRoles.ADMIN, UserRoles.ORGANIZER)
    @Query(returns => EventsEntity)
    fetchEvents(
        @CurrentUser() currentUser: IUser,
    ): Promise<FindManyResult<EventEntity>> {
        const filterOnCreatedBy: AnyObject = currentUser.role === UserRoles.ORGANIZER ? { createdBy: currentUser._id } : {};
        return this.eventService.findMany({ ...filterOnCreatedBy });
    }

    @ForRoles(UserRoles.ADMIN, UserRoles.ORGANIZER)
    @Query(returns => EventEntity)
    fetchEvent(
        @Args({ name: 'eventId', type: () => ID }) eventId: string
    ): Promise<EventEntity> {
        return this.eventService.findOneById(eventId);
    }

    @Query(returns => EventsEntity)
    @ForRoles(UserRoles.ADMIN, UserRoles.ORGANIZER)
    fetchRecentEvents(
        @CurrentUser() currentUser: IUser,
    ): Promise<FindManyResult<EventEntity>> {
        const filterOnCreatedBy: AnyObject = currentUser.role === UserRoles.ORGANIZER ? { createdBy: currentUser._id } : {};
        return this.eventService.findMany({ startDate: { $gte: new Date() }, ...filterOnCreatedBy }, { limit: 10, orderBy: { property: 'startDate', direction: OrderByDirection.Asc } });
    }

    @ForRoles(UserRoles.ADMIN, UserRoles.ORGANIZER)
    @Query(returns => EventsEntity)
    fetchCategoryEvents(
        @CurrentUser() currentUser: IUser,
        @Args({ name: 'categoryId', type: () => ID }) categoryId: string
    ): Promise<FindManyResult<EventEntity>> {
        const filterOnCreatedBy: AnyObject = currentUser.role === UserRoles.ORGANIZER ? { createdBy: currentUser._id } : {};
        return this.eventService.findMany({ category: categoryId, ...filterOnCreatedBy });
    }

    @ForRoles(UserRoles.ADMIN, UserRoles.ORGANIZER)
    @Mutation(returns => EventEntity)
    changeEventState(
        @CurrentUser() currentUser: IUser,
        @Args({ name: 'eventId', type: () => ID }) eventId: string,
        @Args({ name: 'state', type: () => EventState }) state: EventState,
    ): Promise<EventEntity> {
        return this.eventService.updateOneById(eventId, { state: state });
    }

    @ForRoles(UserRoles.ADMIN, UserRoles.ORGANIZER)
    @Mutation(returns => EventEntity)
    changeEventStatus(
        @CurrentUser() currentUser: IUser,
        @Args({ name: 'eventId', type: () => ID }) eventId: string,
        @Args({ name: 'status', type: () => EventStatus }) status: EventState,
    ): Promise<EventEntity> {
        return this.eventService.updateOneById(eventId, { status: status });
    }

    @ForRoles(UserRoles.ORGANIZER)
    @Mutation(returns => EventEntity)
    async createTicket(
        @CurrentUser() currentUser: IUser,
        @Args({ name: 'eventId', type: () => ID }) eventId: string,
        @Args({ name: 'ticketDto', type: () => TicketDto }) ticketDto: TicketDto,
    ): Promise<EventEntity> {
        const result: IUpdateResult = await this.eventService.createTicket(eventId, ticketDto);
        return this.eventService.findOneById(eventId);
    }

    @ForRoles(UserRoles.ORGANIZER)
    @Mutation(returns => EventEntity)
    async removeTicket(
        @CurrentUser() currentUser: IUser,
        @Args({ name: 'eventId', type: () => ID }) eventId: string,
        @Args({ name: 'ticketId', type: () => ID }) ticketId: string,
    ): Promise<EventEntity> {
        const result: IUpdateResult = await this.eventService.removeTicket(eventId, ticketId);
        return this.eventService.findOneById(eventId);
    }
}
