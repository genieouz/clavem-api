import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class TicketDto {
    @Field()
    name: string;

    @Field()
    categoryCriteria: string;

    @Field()
    quantity: number;

    @Field()
    price: number;
}