export interface IReservationRequirements {
    allowed: Boolean;
    payWhenReservation: Boolean;
    reservationFeeRefundable: Boolean;
    percentageToPay: Number;
    limiteDateConfirmation: Date;
}