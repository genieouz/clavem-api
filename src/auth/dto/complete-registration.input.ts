import { UserGender } from '~/user/types/user-gender';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CompleteRegistrationInput {
  @Field()
  public fullName: string;

  @Field({ nullable: true })
  public birthDate: Date;

  @Field(type => UserGender, { nullable: true })
  public gender: UserGender;
}