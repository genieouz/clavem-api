import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ReductionEffectEntity {
    @Field()
    inPercentage: boolean;

    @Field()
    reduction: number;
}
