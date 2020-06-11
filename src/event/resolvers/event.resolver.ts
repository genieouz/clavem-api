import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ID } from 'type-graphql';
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { EventsEntity } from "../entity/events.entity";
import { EventEntity } from "../entity/event.entity";
import { EventService } from "../event.service";

@Resolver()
export class EventResolver {
    constructor(private readonly eventService: EventService) { }

    @Query(returns => EventsEntity)
    fetchEvents(): Promise<FindManyResult<EventEntity>> {
        return this.eventService.findMany({});
    }

    @Query(returns => EventEntity)
    fetchEvent(
        @Args({ name: 'eventId', type: () => ID }) eventId: string
    ): Promise<EventEntity> {
        return this.eventService.findOneById(eventId);
    }

}
