import { ObjectType, Field, ID } from "type-graphql";
import { Paging } from "~/commons/database/typings/Paging";
import { CardEntity } from "~/card/entities/card.entity";
import { ReservationEntity } from "./reservation.entity";

@ObjectType()
export class ReservationsEntity extends Paging {
    @Field(type => [ReservationsEntity])
    public records: ReservationEntity[];
}