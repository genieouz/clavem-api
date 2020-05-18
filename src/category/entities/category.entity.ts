
import { ObjectType, Field, ID } from "type-graphql";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class CategoryEntity{
    @ApiProperty()
    public _id: string;

    @ApiProperty()
    public name: string;
}