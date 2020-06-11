import { ImageSizes } from "~/commons/graphql/types-and-inputs/image-sizes.type";
import { ITicketRequirements } from "./ticket-requirements.interface";
import { IReservationRequirements } from "./reservation-requirements.interface";
import { ITicket } from "./ticket.interface";
import { EventAccessType } from "~/event/enums/event-access-type.enum";
import { IUser } from "~/user/interfaces/user.interface";
import { ICategory } from "~/category/interfaces/category.interface";
import { EventType } from "~/event/enums/event-type.enum";
import { EventStatus } from "~/event/enums/event-status.enum";

export interface IEvent {
    _id: string;
    description: string;
    address: string;
    locationAccuracy: string;
    status: EventStatus;
    type: EventType;
    name: string;
    catchyPhrase: string;
    createdBy: string;
    category: ICategory;
    startDate: Date;
    endDate: Date;
    expectedNumberOfPersons: number;
    accessType: EventAccessType;
    keepContactWithParticipant: boolean;
    paidEntrance: boolean;
    priceIncludingCharges: boolean;
    categoryCriteria: string[];
    offerOnTicketsPurchases: ITicketRequirements;
    tikets: ITicket[];
    reservation: IReservationRequirements;
    poster: ImageSizes;
}