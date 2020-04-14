import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class FinalizeRegistration {
  @Field()
  public token: string;
}
