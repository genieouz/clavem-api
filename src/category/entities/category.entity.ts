import { ObjectType, Field, ID } from "type-graphql";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class CategoryEntity {
  @Field(type => ID)
  public _id: string;

  @Field()
  public name: string;
}