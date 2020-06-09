import { registerEnumType } from 'type-graphql';

export enum EventType {
    Private = 'Privée',
    Public = 'Public',
}

registerEnumType(EventType, {
    name: 'EventType',
});
