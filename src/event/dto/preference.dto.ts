import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class PreferenceDto {
    @Field(type => ID)
    category: string;

    @Field(type => Date)
    startDate: Date;

    @Field(type => Date) 
    endDate: Date;

    @Field()
    city: string;

    @Field()
    region: string;

    @Field()
    price: number;

}