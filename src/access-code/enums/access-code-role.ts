import { registerEnumType } from 'type-graphql';

export enum AccessCodeRole {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    PARTICIPANTS_MANAGER = "PARTICIPANTS_MANAGER",
    OBSERVER = "OBSERVER"
}

registerEnumType(AccessCodeRole, {
    name: 'AccessCodeRole',
});