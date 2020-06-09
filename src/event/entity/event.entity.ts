import { ImageSizes } from "~/commons/graphql/types-and-inputs/image-sizes.type";
import { ITicketRequirements } from "~/event/models/interfaces/ticket-requirements.interface";
import { IReservationRequirements } from "~/event/models/interfaces/reservation-requirements.interface";
import { ITicket } from "~/event/models/interfaces/ticket.interface";
import { EventAccessType } from "~/event/enums/event-access-type.enum";
import { EventType } from "~/event/enums/event-type.enum";
import { EventStatus } from "~/event/enums/event-status.enum";
import { ObjectType, Field, ID } from 'type-graphql';
import { TicketRequirements } from "./ticket-requirements.entity";
import { Ticket } from "./ticket.entity";
import { ReservationRequirements } from "./reservation-requirements.entity";

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

    @Field(type => EventStatus)
    status: EventStatus;

    @Field(type => EventType)
    type: EventType;

    @Field()
    name: string;

    @Field()
    catchyPhrase: string;

    @Field()
    createdBy: string;

    @Field()
    category: string;

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

    @Field()
    categoryCriteria: string[];

    @Field(type => TicketRequirements)
    purchasedTicketInvolveFreeTicket: ITicketRequirements;

    @Field(type => Ticket)
    tikets: ITicket[];

    @Field(type => ReservationRequirements)
    reservation: IReservationRequirements;

    @Field(type => ImageSizes)
    poster: ImageSizes;
}