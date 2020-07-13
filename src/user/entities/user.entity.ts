import { UserGender } from '~/user/enums/user-gender';
import { UserRoles } from '~/user/enums/user-roles.enum';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectType, Field, ID } from 'type-graphql';
import { InternalRole } from '../enums/internal-role.enum';
import { ImageSizes } from '~/commons/graphql/types-and-inputs/image-sizes.type';
import { CardEntity } from '~/card/entities/card.entity';

@ObjectType()
export class UserEntity {
  @ApiProperty()
  @Field(type => ID)
  public _id: string;

  @ApiProperty()
  @Field({ nullable: true })
  public countryCode: string;

  @ApiProperty({ enum: UserRoles })
  @Field(type => UserRoles)
  public role: UserRoles;

  @ApiProperty({ enum: InternalRole, nullable: true })
  @Field(type => InternalRole, { nullable: true })
  public internalRole?: InternalRole;

  @ApiProperty({ enum: UserGender, nullable: true })
  @Field(type => UserGender)
  public gender?: UserGender;

  @ApiProperty()
  @Field({ nullable: true })
  public birthDate?: Date;

  @ApiProperty()
  @Field({ nullable: true })
  public phoneNumber: string;

  @ApiProperty()
  @Field()
  public lastName: string;

  @ApiProperty()
  @Field()
  public firstName: string;

  @ApiProperty()
  @Field()
  public password: string;

  @ApiProperty()
  @Field()
  public email: string;

  @Field(type => ImageSizes, { nullable: true })
  public avatar: ImageSizes;

  @Field()
  public city: string;

  @Field()
  public district: string;

  @Field(type => [CardEntity])
  public cards: CardEntity[];
}