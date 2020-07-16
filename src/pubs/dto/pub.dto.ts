import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class PubDto {
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

    startTime: string;

    endTime: string;

    @Field()
    order: number;
}