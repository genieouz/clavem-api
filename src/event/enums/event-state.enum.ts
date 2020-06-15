import { registerEnumType } from 'type-graphql';

export enum EventState {
    ACTIVATED = 'ACTIVATED',
    DESACTIVATED = 'DESACTIVATED',
    ARCHIVED = 'ARCHIVED',
}

registerEnumType(EventState, {
    name: 'EventState',
});
