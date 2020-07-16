import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class PubEntity {
    @Field(type => ID)
    _id: string;

    @Field()
    title: string;

    @Field()
    object: string;

    @Field(type => Date)
    startDate: Date;

    @Field(type => Date)
    endDate: Date;

    @Field()
    isUp: boolean;

    @Field()
    dependence: string;

    @Field(type => ID)
    attachment: string;

    @Field()
    order: number;

    @Field(type => Date)
    createdAt: Date;
}