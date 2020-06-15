import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Ticket {
    @Field(type => ID)
    _id: string;

    @Field()
    name: string;

    @Field()
    categoryCriteria: string;

    @Field()
    quantity: number;

    @Field()
    price: number;
}