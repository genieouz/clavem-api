import { ReservationState } from "~/reservations/enums/reservation-state";

export interface IReservation {
    _id: string;
    card: string;
    ticket: string;
    client: string;
    state: ReservationState;
}