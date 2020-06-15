import { ImageSizes } from "~/commons/graphql/types-and-inputs/image-sizes.type";
import { ITicketRequirements } from "~/event/models/interfaces/ticket-requirements.interface";
import { IReservationRequirements } from "~/event/models/interfaces/reservation-requirements.interface";
import { ITicket } from "~/event/models/interfaces/ticket.interface";
import { EventAccessType } from "~/event/enums/event-access-type.enum";
import { EventType } from "~/event/enums/event-type.enum";
import { EventState } from "~/event/enums/event-state.enum";
import { EventStatus } from "../enums/event-status.enum";

export class EventDto {
    description: string;
    address: string;
    locationAccuracy: string;
    state: EventState;
    status: EventStatus;
    type: EventType;
    name: string;
    catchyPhrase: string;
    createdBy: string;
    category: string;
    startDate: Date;
    endDate: Date;
    expectedNumberOfPersons: number;
    accessType: EventAccessType;
    keepContactWithParticipant: boolean;
    paidEntrance: boolean;
    priceIncludingCharges: boolean;
    categoryCriteria: string[];
    purchasedTicketInvolveFreeTicket: ITicketRequirements;
    tickets: ITicket[];
    reservation: IReservationRequirements;
    // poster: ImageSizes;
}