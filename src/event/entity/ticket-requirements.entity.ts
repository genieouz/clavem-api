import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class TicketRequirements {
    @Field()
    purchasedTickets: number;

    @Field()
    offeredTickets: number;
}