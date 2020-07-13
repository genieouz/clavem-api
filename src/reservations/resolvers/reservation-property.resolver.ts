import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { ID } from 'type-graphql';
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { UserEntity } from "~/user/entities/user.entity";
import { UserService } from "~/user/services/user.service";
import { IUser } from "~/user/interfaces/user.interface";
import { IEvent } from "~/event/models/interfaces/event.interface";
import { ReservationEntity } from "../entities/reservation.entity";
import { IReservation } from "../models/interfaces/reservation.interface";
import { EventEntity } from "~/event/entity/event.entity";
import { EventService } from "~/event/event.service";
import { Ticket } from "~/event/entity/ticket.entity";
import { CardEntity } from "~/card/entities/card.entity";
import { CardService } from "~/card/service/card.service";

@Resolver(of => ReservationEntity)
export class ReservationPropertyResolver {
    constructor(
        private readonly userService: UserService,
        private readonly eventService: EventService,
        private readonly cardService: CardService,
    ) { }

    @ResolveProperty(returns => UserEntity)
    client(
        @Parent() reservation: IReservation,
    ): Promise<UserEntity> {
        return this.userService.findOneById(reservation.client);
    }

    @ResolveProperty(returns => CardEntity)
    card(
        @Parent() reservation: IReservation,
    ): Promise<CardEntity> {
        return this.cardService.findOneById(reservation.card);
    }

    @ResolveProperty(returns => EventEntity)
    event(
        @Parent() reservation: IReservation,
    ): Promise<EventEntity> {
        return this.eventService.findOne({ 'tickets._id': reservation.ticket });
    }

    @ResolveProperty(returns => Ticket)
    async ticket(
        @Parent() reservation: IReservation,
    ): Promise<Ticket> {
        const event = await this.eventService.findOne({ 'tickets._id': reservation.ticket });
        console.log('event ', event._id)
        console.log('ticket ', reservation.ticket)
        let ticket = null;
        event.tickets.map((t) => {
            if (String(t._id) === String(reservation.ticket)) {
                ticket = t;
            }
        })
        return ticket;
    }
}
