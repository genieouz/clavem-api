import { ObjectType, Field, ID } from "type-graphql";
import { Paging } from "~/commons/database/typings/Paging";
import { AccessCodeEntity } from "~/access-code/entity/access-code.entity";

@ObjectType()
export class AccessCodesEntity extends Paging {
    @Field(type => [AccessCodeEntity])
    public records: AccessCodeEntity[];
}