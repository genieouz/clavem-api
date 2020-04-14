import { UserGender } from '~/user/types/user-gender';
import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class UserInput {
  @Field({ nullable: true })
  public fullName: string;

  @Field(type => UserGender, { nullable: true })
  public gender: UserGender;

  @Field({ nullable: true })
  public birthDate: Date;
}
