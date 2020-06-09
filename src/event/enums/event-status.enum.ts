import { registerEnumType } from 'type-graphql';

export enum EventStatus {
    Activated = 'Activated',
    Desactivated = 'Desactivated',
    Blocked = 'Bloqué'
}

registerEnumType(EventStatus, {
    name: 'EventStatus',
});
