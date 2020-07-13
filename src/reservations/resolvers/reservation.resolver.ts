import { BadRequestException, UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { ForRoles } from "~/auth/decorators/for-roles.decorator";
import { AuthGuard } from "~/auth/guards/auth-guard";
import { CardService } from "~/card/service/card.service";
import { UserRoles } from "~/user/enums/user-roles.enum";
import { IUser } from "~/user/interfaces/user.interface";
import { ReservationInput } from "../dto/reservation.dto";
import { ReservationEntity } from "../entities/reservation.entity";
import { ReservationService } from "../service/reservation.service";

@UseGuards(AuthGuard)
@Resolver()
export class ReservationResolver {
    constructor(
        private readonly reservationService: ReservationService,
        private readonly cardService: CardService,
    ) {}

    @Mutation(returns => Boolean)
    public async createReservation(
        @Args({ name: 'reservationInput', type: () => ReservationInput, nullable: false }) reservationInput: ReservationInput,
        @CurrentUser() currentUser: IUser,
    ): Promise<boolean> {
        let reservation = null;
        if (reservationInput.ticketForOther && reservationInput.cardForOther) {
            const card = await this.cardService.findOneOrFail({ number: reservationInput.cardForOther });
            if (String(card._id) === reservationInput.card) {
                throw new BadRequestException('Try to do reservations on same tickets!');
            }
            await this.checkIfAlreadyReserve(card._id, currentUser._id, reservationInput.ticketForOther);
            reservation = await this.reservationService.insertOne({ card: card._id, ticket: reservationInput.ticketForOther, client: card.owner });
        }
        if(reservationInput.ticket && reservationInput.card) {
            await this.checkIfAlreadyReserve(reservationInput.card, currentUser._id, reservationInput.ticket);
            reservation = await this.reservationService.insertOne({ card: reservationInput.card, ticket: reservationInput.ticket, client: currentUser._id });
        }
        if(reservation) {
            return true;
        } else {
            throw new BadRequestException('Erreur aucune données trouvée!');
        }
    }

    async checkIfAlreadyReserve(card, client, ticket) {
        const found = await this.cardService.findOne({card, client, ticket});
        if(found) {
            throw new BadRequestException('Try to do reservations on same tickets!');
        }
        return false;
    }

    @ForRoles(UserRoles.USER)
    @Query(returns => [ReservationEntity])
    public fetchMyReservations(
        @CurrentUser() currentUser: IUser,
    ): Promise<ReservationEntity[]> {
        return this.reservationService.find({ client: currentUser._id });
    }
}