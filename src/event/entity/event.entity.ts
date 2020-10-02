import { ImageSizes } from "~/commons/graphql/types-and-inputs/image-sizes.type";
import { ITicketRequirements } from "~/event/models/interfaces/ticket-requirements.interface";
import { IReservationRequirements } from "~/event/models/interfaces/reservation-requirements.interface";
import { ITicket } from "~/event/models/interfaces/ticket.interface";
import { EventAccessType } from "~/event/enums/event-access-type.enum";
import { EventType } from "~/event/enums/event-type.enum";
import { EventState } from "~/event/enums/event-state.enum";
import { ObjectType, Field, ID } from 'type-graphql';
import { TicketRequirements } from "~/event/entity/ticket-requirements.entity";
import { Ticket } from "~/event/entity/ticket.entity";
import { ReservationRequirements } from "~/event/entity/reservation-requirements.entity";
import { CategoryEntity } from "~/category/entities/category.entity";
import { UserEntity } from "~/user/entities/user.entity";
import { EventStatus } from "../enums/event-status.enum";
import { Document } from 'mongoose';

@ObjectType()
export class EventEntity extends Document {
    @Field(type => ID)
    _id: string;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    address: string;

    @Field({ nullable: true })
    locationAccuracy: string;

    @Field(type => EventState, { nullable: true })
    state: EventState;

    @Field(type => EventStatus, { nullable: true })
    status: EventStatus;

    @Field(type => EventType, { nullable: true })
    type: EventType;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    catchyPhrase: string;

    @Field(type => UserEntity)
    createdBy: UserEntity;

    @Field(type => CategoryEntity)
    category: CategoryEntity;

    @Field({ nullable: true })
    startDate: Date;

    @Field({ nullable: true })
    endDate: Date;

    @Field({ nullable: true })
    expectedNumberOfPersons: number;

    @Field(type => EventAccessType, { nullable: true })
    accessType: EventAccessType;

    @Field({ nullable: true })
    keepContactWithParticipant: boolean;

    @Field({ nullable: true })
    paidEntrance: boolean;

    @Field({ nullable: true })
    priceIncludingCharges: boolean;

    @Field(type => [String], { nullable: true })
    categoryCriteria: string[];

    @Field(type => TicketRequirements, { nullable: true })
    purchasedTicketInvolveFreeTicket: ITicketRequirements;

    @Field(type => Ticket, { nullable: true })
    tickets: ITicket[];

    @Field(type => ReservationRequirements, { nullable: true })
    reservation: IReservationRequirements;

    @Field(type => ImageSizes, { nullable: true })
    poster: ImageSizes;
}