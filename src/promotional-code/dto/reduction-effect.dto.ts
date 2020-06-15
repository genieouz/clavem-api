import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class ReductionEffectDto {
    @Field()
    inPercentage: boolean;

    @Field()
    reduction: number;
}
