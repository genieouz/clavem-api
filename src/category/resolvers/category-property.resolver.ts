import { Resolver, ResolveProperty, Parent } from "@nestjs/graphql";
import { EventService } from "~/event/event.service";
import { CategoryEntity } from "~/category/entities/category.entity";
import { ICategory } from "~/category/interfaces/category.interface";
import { CategoryService } from "~/category/services/category.service";
import { EventStatus } from "~/event/enums/event-status.enum";
import { EventState } from "~/event/enums/event-state.enum";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { IUser } from "~/user/interfaces/user.interface";
import { UserRoles } from "~/user/enums/user-roles.enum";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "~/auth/guards/auth-guard";

@UseGuards(AuthGuard)
@Resolver(of => CategoryEntity)
export class CategoryPropertyResolver {
    constructor(
        private readonly eventService: EventService,
        private readonly categoryService: CategoryService,
    ) { }

    @ResolveProperty(returns => Number)
    refused(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, status: EventStatus.REFUSED, ...filterOnCreatedBy });
    }

    @ResolveProperty(returns => Number)
    validated(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, status: EventStatus.VALIDATED, ...filterOnCreatedBy });
    }

    @ResolveProperty(returns => Number)
    blocked(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, status: EventStatus.BLOCKED, ...filterOnCreatedBy });
    }

    @ResolveProperty(returns => Number)
    pending(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, status: EventStatus.PENDING, ...filterOnCreatedBy });
    }

    @ResolveProperty(returns => Number)
    activated(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, state: EventState.ACTIVATED, ...filterOnCreatedBy });
    }

    @ResolveProperty(returns => Number)
    desactivated(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, state: EventState.DESACTIVATED, ...filterOnCreatedBy });
    }

    @ResolveProperty(returns => Number)
    archived(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, state: EventState.ARCHIVED, ...filterOnCreatedBy });
    }

    @ResolveProperty(returns => Number)
    paidEntrance(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, paidEntrance: true, ...filterOnCreatedBy });
    }

    @ResolveProperty(returns => Number)
    freeEntrance(
        @Parent() category: ICategory,
        @CurrentUser() currentUser: IUser,
    ): Promise<number> {
        const filterOnCreatedBy = (currentUser.role === UserRoles.ORGANIZER) ? { createdBy: currentUser._id } : {};
        return this.eventService.count({ category: category._id, paidEntrance: false, ...filterOnCreatedBy });
    }
}
