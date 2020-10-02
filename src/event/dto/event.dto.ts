import { ImageSizes } from "~/commons/graphql/types-and-inputs/image-sizes.type";
import { ITicketRequirements } from "~/event/models/interfaces/ticket-requirements.interface";
import { IReservationRequirements } from "~/event/models/interfaces/reservation-requirements.interface";
import { ITicket } from "~/event/models/interfaces/ticket.interface";
import { EventAccessType } from "~/event/enums/event-access-type.enum";
import { EventType } from "~/event/enums/event-type.enum";
import { EventState } from "~/event/enums/event-state.enum";
import { EventStatus } from "../enums/event-status.enum";
import { InputType, Field, ID } from "type-graphql";

@InputType()
export class EventDto {
    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    address: string;

    @Field({ nullable: true })
    locationAccuracy: string;

    state: EventState;
    status: EventStatus;

    @Field(type => EventType, { nullable: true })
    type: EventType;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    catchyPhrase: string;

    createdBy: string;

    @Field(type => ID, { nullable: true })
    category: string;

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

    priceIncludingCharges: boolean;

    categoryCriteria: string[];

    purchasedTicketInvolveFreeTicket: ITicketRequirements;

    tickets: ITicket[];

    reservation: IReservationRequirements;
    // poster: ImageSizes;
}