import { ObjectType, Field, ID } from "type-graphql";
import { Paging } from "~/commons/database/typings/Paging";
import { PromotionalCodeEntity } from "~/promotional-code/entity/promotional-code.entity";

@ObjectType()
export class PromotionalCodesEntity extends Paging {
    @Field(type => [PromotionalCodeEntity])
    public records: PromotionalCodeEntity[];
}