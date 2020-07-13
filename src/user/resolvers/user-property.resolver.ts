import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { UserEntity } from "~/user/entities/user.entity";
import { UserService } from "~/user/services/user.service";
import { IUser } from "~/user/interfaces/user.interface";
import { CardEntity } from "~/card/entities/card.entity";
import { CardService } from "~/card/service/card.service";

@Resolver(of => UserEntity)
export class UserPropertyResolver {
    constructor(
        private readonly cardService: CardService,
    ) { }

    @ResolveProperty(returns => [CardEntity])
    cards(
        @Parent() user: IUser,
    ): Promise<CardEntity[]> {
        return this.cardService.find({ owner: user._id });
    }

}
