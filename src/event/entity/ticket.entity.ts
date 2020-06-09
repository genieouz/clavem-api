import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Ticket {
    @Field()
    name: string;

    @Field()
    categoryCriteria: string;

    @Field()
    quantity: number;

    @Field()
    price: number;
}