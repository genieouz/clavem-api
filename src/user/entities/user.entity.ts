import { UserGender } from '~/user/enums/user-gender';
import { UserRoles } from '~/user/enums/user-roles.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty()
  public _id: string;

  @ApiProperty()
  public countryCode: string;

  @ApiProperty({ enum: UserRoles })
  public role: UserRoles;

  @ApiProperty({ enum: UserGender })
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