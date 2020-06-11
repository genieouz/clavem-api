import { ObjectType, Field, ID } from "type-graphql";
import { Paging } from "~/commons/database/typings/Paging";
import { EventEntity } from "~/event/entity/event.entity";

@ObjectType()
export class EventsEntity extends Paging {
    @Field(type => [EventEntity])
    public records: EventEntity[];
}