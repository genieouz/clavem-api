import { registerEnumType } from 'type-graphql';

export enum EventAccessType {
    Private = 'Privée',
    Public = 'Public',
}

registerEnumType(EventAccessType, {
    name: 'EventAccessType',
});
