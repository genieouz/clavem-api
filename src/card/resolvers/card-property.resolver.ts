import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { ID } from 'type-graphql';
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { UserEntity } from "~/user/entities/user.entity";
import { UserService } from "~/user/services/user.service";
import { IUser } from "~/user/interfaces/user.interface";
import { IEvent } from "~/event/models/interfaces/event.interface";
import { CardEntity } from "../entities/card.entity";
import { ICard } from "../models/interfaces/card.interface";

@Resolver(of => CardEntity)
export class CardPropertyResolver {
    constructor(
        private readonly userService: UserService,
    ) { }

    @ResolveProperty(returns => UserEntity)
    owner(
        @Parent() card: ICard,
    ): Promise<UserEntity> {
        return this.userService.findOneById(card.owner);
    }

}
