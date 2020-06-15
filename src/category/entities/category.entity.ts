import { ObjectType, Field, ID } from "type-graphql";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class CategoryEntity {
  @Field(type => ID)
  public _id: string;

  @Field()
  public name: string;

  @Field()
  public refused: number;

  @Field()
  public validated: number;

  @Field()
  public blocked: number;

  @Field()
  public pending: number;

  @Field()
  public activated: number;

  @Field()
  public desactivated: number;

  @Field()
  public archived: number;

  @Field()
  public paidEntrance: number;

  @Field()
  public freeEntrance: number;
}