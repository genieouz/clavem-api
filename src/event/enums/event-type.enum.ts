import { registerEnumType } from 'type-graphql';

export enum EventType {
    Private = 'Privé',
    Public = 'Public',
}

registerEnumType(EventType, {
    name: 'EventType',
});
