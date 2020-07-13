import { registerEnumType } from 'type-graphql';

export enum ReservationState {
    ACCEPTED = 'ACCEPTED',
    REFUSED = 'REFUSED',
    PENDING = 'PENDING'
}

registerEnumType(ReservationState, {
    name: 'ReservationState',
});
