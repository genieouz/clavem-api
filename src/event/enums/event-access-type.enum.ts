import { registerEnumType } from 'type-graphql';

export enum EventAccessType {
    Uniq = 'Unique',
    Free = 'Libre',
}

registerEnumType(EventAccessType, {
    name: 'EventAccessType',
});
