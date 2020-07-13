import { IEvent } from "~/event/models/interfaces/event.interface";
import { ObjectType, Field, ID } from "type-graphql";
import { CardEntity } from "~/card/entities/card.entity";
import { ICard } from "~/card/models/interfaces/card.interface";
import { EventEntity } from "~/event/entity/event.entity";
import { Ticket } from "~/event/entity/ticket.entity";
import { ITicket } from "~/event/models/interfaces/ticket.interface";
import { UserEntity } from "~/user/entities/user.entity";
import { IUser } from "~/user/interfaces/user.interface";
import { ReservationState } from "../enums/reservation-state";

@ObjectType()
export class ReservationEntity {
    @Field(type => ID!)
    public _id: string;
    
    @Field(type => CardEntity)
    public card: ICard;

    @Field(type => Ticket)
    public ticket: ITicket;

    @Field(type => UserEntity)
    public client: IUser;

    @Field(type => ReservationState)
    public state: ReservationState;

    @Field(type => EventEntity)
    public event: IEvent;
}