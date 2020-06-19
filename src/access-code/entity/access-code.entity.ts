import { ObjectType, Field, ID } from 'type-graphql';
import { AccessCodeRole } from '~/access-code/enums/access-code-role';
import { Document } from 'mongoose';
import { UserEntity } from '~/user/entities/user.entity';

@ObjectType()
export class AccessCodeEntity extends Document {
    @Field(type => ID)
    _id: string;

    @Field(type => UserEntity)
    organizer: UserEntity;

    @Field()
    username: string;

    @Field()
    password: string;

    @Field(type => AccessCodeRole)
    role: AccessCodeRole;
}