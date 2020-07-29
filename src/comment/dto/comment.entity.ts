import { ObjectType, Field, ID } from 'type-graphql';
import { EventEntity } from '~/event/entity/event.entity';
import { IEvent } from '~/event/models/interfaces/event.interface';
import { UserEntity } from '~/user/entities/user.entity';
import { IUser } from '~/user/interfaces/user.interface';

@ObjectType()
export class CommentEntity {
  @Field(type => ID)
  public id: string;

  @Field()
  message: string;

  @Field(type => Date)
  createdAt: Date;

  @Field(type => UserEntity)
  sender: IUser;

  @Field(type => UserEntity)
  destinataire: IUser;

  @Field(type => EventEntity)
  event: IEvent;
}