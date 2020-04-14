import { registerEnumType } from 'type-graphql';
export enum UserRoles {
    USER = 'user',
    ADMIN = 'admin',
}

registerEnumType(UserRoles, {
  name: 'UserRoles',
  description: 'User role',
});