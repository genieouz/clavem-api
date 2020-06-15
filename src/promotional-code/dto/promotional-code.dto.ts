import { InputType, Field, ID } from 'type-graphql';
import { ReductionEffectDto } from './reduction-effect.dto';
import { PromotionalCodeImpact } from '../enums/promotional-code-impact.enum';

@InputType()
export class PromotionalCodeDto {
    @Field(type => ID)
    eventId: string;

    @Field(type => PromotionalCodeImpact)
    impact: PromotionalCodeImpact;

    @Field()
    privateName: string;

    @Field()
    numberOfGeneratedCodes: number;

    @Field(type => [ID])
    tickets: string[];

    @Field(type => ReductionEffectDto)
    reductionEffect: ReductionEffectDto;

    @Field()
    publicName: string;

    @Field()
    usableNumberOfTimes: number;

    @Field()
    startDate: Date;

    @Field()
    endDate: Date;
}
