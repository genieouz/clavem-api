import { UserGender } from '~/user/enums/user-gender';
import { UserRoles } from '~/user/enums/user.roles';
import { ObjectType, Field, ID } from "type-graphql";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class UserEntity {
  @ApiProperty()
  public _id: string;

  @ApiProperty()
  public countryCode: string;

  @ApiProperty({ type: UserRoles })
  public role: UserRoles;

  @ApiProperty()
  public gender?: UserGender;

  @ApiProperty()
  public birthDate?: Date;

  @ApiProperty()
  public phoneNumber: string;

  @ApiProperty()
  public lastName: string;

  @ApiProperty()
  public firstName: string;

  @ApiProperty()
  public password: string;

  @ApiProperty()
  public email: string;
}