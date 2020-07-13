import { InputType, Field, ID } from "type-graphql";

@InputType()
export class ReservationInput {
    @Field({nullable: true})
    public card: string;

    @Field({ nullable: true })
    public ticket: string;

    @Field({ nullable: true })
    public cardForOther: string;

    @Field({ nullable: true })
    public ticketForOther: string;
}