import { InputType, Field } from 'type-graphql';

@InputType()
export class CategoryInput {
  @Field()
  public name: string;
}
