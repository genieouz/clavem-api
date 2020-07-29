import { InputType, Field, ID } from 'type-graphql';
import { UserEntity } from '~/user/entities/user.entity';
import { IUser } from '~/user/interfaces/user.interface';

@InputType()
export class CommentDto {
  @Field()
  message: string;

  @Field(type => ID)
  destinataire: string;

  @Field(type => ID)
  event: string;
}
