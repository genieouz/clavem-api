import { Module } from '@nestjs/common';
import { CategoryService } from '~/category/services/category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { categoryModelName } from '~/category/category.model-name';
import { CategorySchema } from '~/category/models/schemas/category.schema';
import { CategoryController } from '~/category/category.controller';
import { CategoryResolver } from '~/category/resolvers/category.resolver';
import { CategoryPropertyResolver } from '~/category/resolvers/category-property.resolver';
import { EventModule } from '~/event/event.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: categoryModelName, schema: CategorySchema }]),
        EventModule,
    ],
    providers: [
        CategoryService,
        CategoryResolver,
        CategoryPropertyResolver,
    ],
    controllers: [CategoryController]
})
export class CategoryModule { }
