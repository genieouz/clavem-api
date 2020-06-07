import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractService } from '~/commons/services/abstract.service';
import { categoryModelName } from '~/category/category.model-name';
import { CategoryEntity } from '~/category/entities/category.entity';

@Injectable()
export class CategoryService extends AbstractService<CategoryEntity> {
    constructor(
        @InjectModel(categoryModelName) private readonly categoryModel: Model<CategoryEntity>
    ) {
        super(categoryModel);
    }
}
