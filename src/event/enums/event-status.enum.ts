import { registerEnumType } from 'type-graphql';

export enum EventStatus {
    Actived = 'Activé',
    Desactived = 'Désactivé',
    Blocked = 'Bloqué'
}

registerEnumType(EventStatus, {
    name: 'EventStatus',
});
