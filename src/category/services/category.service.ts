import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '../entities/category.entity';
import { Model } from 'mongoose';
import { AbstractService } from '~/commons/services/abstract.service';
import { InjectModel } from '@nestjs/mongoose';
import { categoryModelName } from '../models/schemas/category.model-name';
import { ICategory } from '../interfaces/category.interface';

@Injectable()
export class CategoryService extends AbstractService <CategoryEntity> {

    constructor( @InjectModel(categoryModelName) private readonly  categoryModel: Model<CategoryEntity> ) {
        super(categoryModel)
    }
}

