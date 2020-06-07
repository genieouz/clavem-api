import { ObjectType, Field, ID } from "type-graphql";
import { Paging } from "~/commons/database/typings/Paging";
import { CategoryEntity } from "~/category/entities/category.entity";

@ObjectType()
export class CategoriesEntity extends Paging {
    @Field(type => [CategoryEntity])
    public records: CategoryEntity[];
}