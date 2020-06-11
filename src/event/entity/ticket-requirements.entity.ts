import { ObjectType, Field } from 'type-graphql';
import { ITicketRequirementsQuantity } from '~/event/models/interfaces/ticket-requirements-quantity.interface';
import { TicketRequirementsQuantity } from '~/event/entity/ticket-requirements-quantity.entity';

@ObjectType()
export class TicketRequirements {
    @Field()
    purchasedTicketInvolveFreeTicket: Boolean;

    @Field(type => TicketRequirementsQuantity)
    purchasedTickets: ITicketRequirementsQuantity;

    @Field(type => TicketRequirementsQuantity)
    offeredTickets: ITicketRequirementsQuantity;
}