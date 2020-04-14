import { InputType, Field } from "type-graphql";

@InputType()
export class StartRegistrationInput {
  @Field()
  public phone: number;

  @Field()
  public countryCode: number;
}