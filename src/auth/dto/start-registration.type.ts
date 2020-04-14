import { VALIDATION_CODE_MAX_LENGTH } from '~/auth/auth.conf';
import { ObjectType, Field } from 'type-graphql';
import { MaxLength } from 'class-validator';

@ObjectType()
export class StartRegistration {
  @MaxLength(VALIDATION_CODE_MAX_LENGTH)
  @Field()
  public validationCode: string;

  @Field()
  public validationToken: string;
}
