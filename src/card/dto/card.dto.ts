import { InputType, Field, ID } from "type-graphql";

@InputType()
export class CardInput {
    @Field()
    public number: string;
}