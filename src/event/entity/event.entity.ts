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

@ObjectType()
export class EventEntity {
    @Field(type => ID)
    _id: string;

    @Field()
    description: string;

    @Field()
    address: string;

    @Field()
    locationAccuracy: string;

    @Field(type => EventState)
    state: EventState;

    @Field(type => EventStatus)
    status: EventStatus;

    @Field(type => EventType)
    type: EventType;

    @Field()
    name: string;

    @Field()
    catchyPhrase: string;

    @Field(type => UserEntity)
    createdBy: UserEntity;

    @Field(type => CategoryEntity)
    category: CategoryEntity;

    @Field()
    startDate: Date;

    @Field()
    endDate: Date;

    @Field()
    expectedNumberOfPersons: number;

    @Field(type => EventAccessType)
    accessType: EventAccessType;

    @Field()
    keepContactWithParticipant: boolean;

    @Field()
    paidEntrance: boolean;

    @Field()
    priceIncludingCharges: boolean;

    @Field(type => [String])
    categoryCriteria: string[];

    @Field(type => TicketRequirements)
    purchasedTicketInvolveFreeTicket: ITicketRequirements;

    @Field(type => Ticket)
    tickets: ITicket[];

    @Field(type => ReservationRequirements)
    reservation: IReservationRequirements;

    @Field(type => ImageSizes)
    poster: ImageSizes;
}