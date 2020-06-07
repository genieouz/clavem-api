import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CategoryService } from "~/category/services/category.service";
import { CategoryEntity } from "~/category/entities/category.entity";
import { FindManyResult } from "~/commons/database/typings/find-many-result.interface";
import { CategoriesEntity } from "~/category/entities/categories.entity";
import { CategoryInput } from "~/category/dto/category.input"

@Resolver()
export class CategoryResolver {
    constructor(private readonly categoryService: CategoryService) {}
    
    @Query(returns => CategoriesEntity)
    fetchCategories(): Promise<FindManyResult<CategoryEntity>> {
        return this.categoryService.findMany({});
    }

    @Mutation(returns => CategoryEntity)
    createCategory(
        @Args({ name: 'categoryInput', type: () => CategoryInput }) categoryInput: CategoryInput
    ): Promise<CategoryEntity> {
        return this.categoryService.insertOne(categoryInput);
    }
}
