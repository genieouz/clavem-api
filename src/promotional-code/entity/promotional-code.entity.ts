import { ObjectType, Field, ID } from 'type-graphql';
import { ReductionEffectDto } from '~/promotional-code/dto/reduction-effect.dto';
import { PromotionalCodeImpact } from '~/promotional-code/enums/promotional-code-impact.enum';
import { Ticket } from '~/event/entity/ticket.entity';
import { ReductionEffectEntity } from './reduction-effect.entity';
import { EventEntity } from '~/event/entity/event.entity';

@ObjectType()
export class PromotionalCodeEntity {
    @Field()
    _id: string;

    @Field(type => ID)
    eventId: string;

    @Field(type => EventEntity)
    event: EventEntity;

    @Field(type => PromotionalCodeImpact)
    impact: PromotionalCodeImpact;

    @Field()
    privateName: string;

    @Field()
    numberOfGeneratedCodes: number;

    @Field(type => [Ticket])
    tickets: Ticket[];

    @Field(type => ReductionEffectEntity)
    reductionEffect: ReductionEffectEntity;

    @Field()
    publicName: string;

    @Field()
    usableNumberOfTimes: number;

    @Field()
    startDate: Date;

    @Field()
    endDate: Date;
}
