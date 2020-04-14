import { UserGender } from '~/user/types/user-gender';
import { UserRoles } from '~/user/types/user.roles';
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field(type => ID)
  private _id: string;

  @Field()
  public phone: number;

  @Field()
  public countryCode: number;

  @Field(type => UserRoles)
  private role: string;

  @Field()
  public fullName: string;

  @Field(type => UserGender)
  public gender: UserGender;

  @Field()
  public birthDate: Date;
}