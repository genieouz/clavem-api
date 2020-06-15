import { registerEnumType } from 'type-graphql';

export enum EventStatus {
    VALIDATED = 'VALIDATED',
    REFUSED = 'REFUSED',
    PENDING = 'PENDING',
    BLOCKED = 'BLOCKED',
}

registerEnumType(EventStatus, {
    name: 'EventStatus',
});
