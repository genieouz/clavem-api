import { registerEnumType } from 'type-graphql';

export enum CardState {
    ACTIVATED = 'ACTIVATED',
    DESACTIVATED = 'DESACTIVATED',
    BLOCKED = 'BLOCKED',
    LOST = 'LOST'
}

registerEnumType(CardState, {
    name: 'CardState',
});
