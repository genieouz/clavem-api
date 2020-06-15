import { Resolver, ResolveProperty, Parent } from "@nestjs/graphql";
import { EventService } from "~/event/event.service";
import { CategoryEntity } from "~/category/entities/category.entity";
import { ICategory } from "~/category/interfaces/category.interface";
import { CategoryService } from "~/category/services/category.service";
import { EventStatus } from "~/event/enums/event-status.enum";
import { EventState } from "~/event/enums/event-state.enum";

@Resolver(of => CategoryEntity)
export class CategoryPropertyResolver {
    constructor(
        private readonly eventService: EventService,
        private readonly categoryService: CategoryService,
    ) { }

    @ResolveProperty(returns => Number)
    refused(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, status: EventStatus.REFUSED });
    }

    @ResolveProperty(returns => Number)
    validated(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, status: EventStatus.VALIDATED });
    }

    @ResolveProperty(returns => Number)
    blocked(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, status: EventStatus.BLOCKED });
    }

    @ResolveProperty(returns => Number)
    pending(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, status: EventStatus.PENDING });
    }

    @ResolveProperty(returns => Number)
    activated(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, state: EventState.ACTIVATED });
    }

    @ResolveProperty(returns => Number)
    desactivated(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, state: EventState.DESACTIVATED });
    }

    @ResolveProperty(returns => Number)
    archived(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, state: EventState.ARCHIVED });
    }

    @ResolveProperty(returns => Number)
    paidEntrance(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, paidEntrance: true });
    }

    @ResolveProperty(returns => Number)
    freeEntrance(
        @Parent() category: ICategory,
    ): Promise<number> {
        return this.eventService.count({ category: category._id, paidEntrance: false });
    }
}
