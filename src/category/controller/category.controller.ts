import { Controller, Get, Param, Body, Post, Delete, UseGuards, Patch } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../interfaces/category.interface';
import { CategoryInput } from '../dto/category.input';
import { CategoryEntity } from '../entities/category.entity';
import { FindManyResult } from '~/commons/database/typings/find-many-result.interface';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard('jwt'))
@Controller('category')
export class CategoryController {

    constructor(private readonly categotyService: CategoryService) {
        
    }

    @Get()
    public getAll(): Promise<FindManyResult<CategoryEntity>>{
        return this.categotyService.findMany({}, )
    }

    @Get(':id')
    public findOne(@Param('id') id: string): Promise<CategoryEntity> {
        return this.categotyService.findOneByIdOrFail(id);
    }

    @Post()
    public create(@Body() newCategory: CategoryInput):  Promise<CategoryEntity> {
        return this.categotyService.insertOne(newCategory)
    }

    @Delete(':id')
    public delele(@Param('id') id: string): Promise<Boolean> {
        return this.categotyService.removeOneById(id);
    }

    @Patch(':id')
    public update(@Param('id') id: string, @Body() updatedCategory: CategoryInput): Promise<CategoryEntity>{
        return this.categotyService.updateOneById(id, updatedCategory);
    }
}

