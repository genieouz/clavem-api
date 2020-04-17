import { UserGender } from '~/user/enums/user-gender';
import { UserRoles } from '~/user/enums/user.roles';
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserEntity {
  public _id: string;
  public countryCode: string;
  public role: UserRoles;
  public gender?: UserGender;
  public birthDate?: Date;
  public phoneNumber: string;
  public lastName: string;
  public firstName: string;
  public password: string;
  public email: string;
}