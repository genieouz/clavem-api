import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class ReservationRequirements {
    @Field()
    allowed: Boolean;

    @Field()
    payWhenReservation: Boolean;

    @Field()
    reservationFeeRefundable: Boolean;

    @Field()
    percentageToPay: Number;

    @Field()
    limiteDateConfirmation: Date;
}