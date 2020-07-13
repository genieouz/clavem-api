import { ObjectType, Field, ID } from "type-graphql";
import { UserEntity } from "~/user/entities/user.entity";
import { IUser } from "~/user/interfaces/user.interface";

@ObjectType()
export class CardEntity {
    @Field(type => ID!)
    public _id: string;
    
    @Field()
    public number: String;

    @Field(type => UserEntity)
    public owner: IUser;
}