import { ITicketRequirementsQuantity } from "~/event/models/interfaces/ticket-requirements-quantity.interface";

export interface ITicketRequirements {
    purchasedTicketInvolveFreeTicket: boolean;
    purchasedTickets: ITicketRequirementsQuantity;
    offeredTickets: ITicketRequirementsQuantity;
}