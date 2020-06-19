import { ObjectType, Field, ID } from "type-graphql";
import { Paging } from "~/commons/database/typings/Paging";
import { EventEntity } from "~/event/entity/event.entity";
import { UserEntity } from "./user.entity";

@ObjectType()
export class UsersEntity extends Paging {
    @Field(type => [UserEntity])
    public records: UserEntity[];
}