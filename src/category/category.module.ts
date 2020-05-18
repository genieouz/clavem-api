import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { categoryModelName } from './models/schemas/category.model-name';
import { CategorySchema } from './models/schemas/category.schema';
import { CategoryController } from './controller/category.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: categoryModelName, schema: CategorySchema }]),
  ],
  providers: [CategoryService],

  exports: [ CategoryService, MongooseModule ],

  controllers: [CategoryController]
})
export class CategoryModule {}
