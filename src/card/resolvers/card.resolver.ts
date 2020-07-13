import { BadRequestException, UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { ForRoles } from "~/auth/decorators/for-roles.decorator";
import { AuthGuard } from "~/auth/guards/auth-guard";
import { CardService } from "~/card/service/card.service";
import { UserRoles } from "~/user/enums/user-roles.enum";
import { IUser } from "~/user/interfaces/user.interface";
import { CardEntity } from "../entities/card.entity";
import { CardsEntity } from "../entities/cards.entity";
import { CardState } from "../enums/card-state";

@UseGuards(AuthGuard)
@Resolver()
export class CardResolver {
    constructor(private readonly cardService: CardService) {}

    @Mutation(returns => CardEntity)
    public createCard(
        @Args({ name: 'cardNumber', type: () => String, nullable: false }) cardNumber: string,
        @CurrentUser() currentUser: IUser,
    ): Promise<CardEntity> {
        if(!cardNumber || cardNumber.trim() === '') {
            throw new BadRequestException('Numéro invalide!')
        }
        return this.cardService.insertOne({number: cardNumber, owner: currentUser._id});
    }

    @ForRoles(UserRoles.ADMIN)
    @Query(returns => CardsEntity)
    public fetchCards(): Promise<CardsEntity> {
        return this.cardService.findMany({});
    }

    @ForRoles(UserRoles.USER)
    @Query(returns => [CardEntity])
    public fetchMyCards(
        @CurrentUser() currentUser: IUser,
    ): Promise<CardEntity[]> {
        return this.cardService.find({ owner: currentUser._id, state: { $ne: CardState.LOST } });
    }

    @Mutation(returns => CardEntity)
    public async lostCard(
        @Args({ name: 'cardNumber', type: () => String, nullable: false }) cardNumber: string,
        @Args({ name: 'emergencyCard', type: () => String, nullable: true }) emergencyCard: string,
        @CurrentUser() currentUser: IUser,
    ): Promise<CardEntity> {
        if (!cardNumber || cardNumber.trim() === '') {
            throw new BadRequestException('Numéro invalide!')
        }
        const card = await this.cardService.findOneOrFail({ owner: currentUser._id, number: cardNumber });
        if(emergencyCard) {
            await this.cardService.findOneOrFail({ number: emergencyCard });
            this.cardService.addToSet({ number: emergencyCard }, 'emergencyOf', String(card._id));
        }
        return this.cardService.updateOneById(card._id, { state: CardState.LOST });
    }
}