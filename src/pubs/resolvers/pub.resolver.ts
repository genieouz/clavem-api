import { Resolver, Query } from "@nestjs/graphql";
import { PubEntity } from "../entities/pub.entity";
import { IPub } from "../models/interfaces/pub.interface";
import { PubService } from "../pub.service";

@Resolver()
export class PubResolver {
    constructor(
        private readonly pubService: PubService,
    ) {}

    @Query(returns => [PubEntity])
    fetchPubs(): Promise<IPub[]> {
        return this.pubService.find({});
    }

    @Query(returns => [PubEntity])
    fetchUpPubs(): Promise<IPub[]> {
        return this.pubService.find({ isUp: true });
    }

    @Query(returns => [PubEntity])
    fetchNoUpPubs(): Promise<IPub[]> {
        return this.pubService.find({ isUp: false });
    }

    @Query(returns => [PubEntity])
    fetchActivePubs(): Promise<IPub[]> {
        const currentDate = new Date();
        return this.pubService.find({ startDate: { $lte: currentDate }, endDate: { $gte: currentDate } });
    }

    @Query(returns => [PubEntity])
    fetchNextPubs(): Promise<IPub[]> {
        const currentDate = new Date();
        return this.pubService.find({ startDate: { $gt: currentDate } });
    }

    @Query(returns => [PubEntity])
    fetchUpActivePubs(): Promise<IPub[]> {
        const currentDate = new Date();
        return this.pubService.find({ isUp: true, startDate: { $lte: currentDate }, endDate: { $gte: currentDate } }, { orderBy: {property: 'createdAt', direction: -1} });
    }

    @Query(returns => [PubEntity])
    fetchNoUpActivePubs(): Promise<IPub[]> {
        const currentDate = new Date();
        return this.pubService.find({ isUp: false, startDate: { $lte: currentDate }, endDate: { $gte: currentDate } }, { orderBy: { property: 'createdAt', direction: -1 } });
    }

    @Query(returns => [PubEntity])
    fetchNextUpPubs(): Promise<IPub[]> {
        const currentDate = new Date();
        return this.pubService.find({ isUp: true, startDate: { $gt: currentDate } }, { orderBy: { property: 'createdAt', direction: -1 } });
    }

    @Query(returns => [PubEntity])
    fetchNextNoUpPubs(): Promise<IPub[]> {
        const currentDate = new Date();
        return this.pubService.find({ isUp: false, startDate: { $gt: currentDate } }, { orderBy: { property: 'createdAt', direction: -1 } });
    }
}