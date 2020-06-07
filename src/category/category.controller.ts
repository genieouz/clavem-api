import { Controller, UseGuards, Query, Get, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoryService } from './services/category.service';
import { ClientFilterInput } from '~/commons/graphql/types-and-inputs/client-filter.input';
import { FindManyResult } from '~/commons/database/typings/find-many-result.interface';
import { CategoryEntity } from '~/category/entities/category.entity';
import { CategoryInput } from '~/category/dto/category.input';

@Controller('category')
@UseGuards(AuthGuard('jwt'))
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Post()
    insertOne(@Body() category: CategoryInput): Promise<CategoryEntity> {
        return this.categoryService.insertOne(category);
    }

    @Get()
    fetchMany(@Query() clientFIlter: ClientFilterInput): Promise<FindManyResult<CategoryEntity>> {
        return this.categoryService.findMany({}, clientFIlter);
    }
}
