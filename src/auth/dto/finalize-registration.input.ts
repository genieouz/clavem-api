import { InputType, Field } from "type-graphql";

@InputType()
export class FinalizeRegistrationInput {
    @Field()
    public validationCode: string;

    @Field()
    public validationToken: string;
}