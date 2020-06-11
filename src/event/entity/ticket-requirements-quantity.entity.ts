import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class TicketRequirementsQuantity {
    @Field()
    quantity: number;

    @Field()
    categoryCriteria: string;
}