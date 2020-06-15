import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { EventService } from "~/event/event.service";
import { PromotionalCodeEntity } from "../entity/promotional-code.entity";
import { PromotionalCodeService } from "../promotional-code.service";
import { EventEntity } from "~/event/entity/event.entity";
import { Ticket } from "~/event/entity/ticket.entity";

@Resolver(of => PromotionalCodeEntity)
export class PromotionalCodePropertyResolver {
    constructor(
        private readonly eventService: EventService,
        private readonly promotionalCodeService: PromotionalCodeService,
    ) { }

    @ResolveProperty(returns => [Ticket])
    async tickets(
        @Parent() promotionalCode: PromotionalCodeEntity,
    ): Promise<Ticket[]> {
        const event: EventEntity = await this.eventService.findOneById(promotionalCode.eventId);
        const tickets = JSON.stringify(promotionalCode.tickets);
        return event.tickets.filter((ticket) => {
            return tickets.indexOf(String(ticket._id)) >= 0;
        });
    }

    @ResolveProperty(returns => EventEntity)
    async event(
        @Parent() promotionalCode: PromotionalCodeEntity,
    ): Promise<EventEntity> {
        return this.eventService.findOneById(promotionalCode.eventId);
    }

}
