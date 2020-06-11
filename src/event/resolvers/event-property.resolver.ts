import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { ID } from 'type-graphql';
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { EventsEntity } from "../entity/events.entity";
import { EventEntity } from "../entity/event.entity";
import { EventService } from "../event.service";
import { UserEntity } from "~/user/entities/user.entity";
import { UserService } from "~/user/services/user.service";
import { IUser } from "~/user/interfaces/user.interface";
import { IEvent } from "dist/event/models/interfaces/event.interface";

@Resolver(of => EventEntity)
export class EventPropertyResolver {
    constructor(
        private readonly eventService: EventService,
        private readonly userService: UserService,
        ) { }

    @ResolveProperty(returns => UserEntity)
    createdBy(
        @Parent() event: IEvent,
    ): Promise<UserEntity> {
        return this.userService.findOneById(event.createdBy);
    }

}
