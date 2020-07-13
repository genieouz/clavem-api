import { ObjectType, Field, ID } from "type-graphql";
import { Paging } from "~/commons/database/typings/Paging";
import { CardEntity } from "~/card/entities/card.entity";

@ObjectType()
export class CardsEntity extends Paging {
    @Field(type => [CardEntity])
    public records: CardEntity[];
}