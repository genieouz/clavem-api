import { UserGender } from '~/user/enums/user-gender';
import { UserRoles } from '~/user/enums/user-roles.enum';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserEntity {
  @ApiProperty()
  @Field(type => ID)
  public _id: string;

  @ApiProperty()
  @Field()
  public countryCode: string;

  @ApiProperty({ enum: UserRoles })
  @Field(type => UserRoles)
  public role: UserRoles;

  @ApiProperty({ enum: UserGender })
  @Field(type => UserGender)
  public gender?: UserGender;

  @ApiProperty()
  @Field()
  public birthDate?: Date;

  @ApiProperty()
  @Field()
  public phoneNumber: string;

  @ApiProperty()
  @Field()
  public lastName: string;

  @ApiProperty()
  @Field()
  public firstName: string;

  @ApiProperty()
  public password: string;

  @ApiProperty()
  @Field()
  public email: string;
}