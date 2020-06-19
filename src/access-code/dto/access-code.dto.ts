import { InputType, Field } from 'type-graphql';
import { AccessCodeRole } from '~/access-code/enums/access-code-role';

@InputType()
export class AccessCodeDto {
    @Field()
    username: string;

    @Field()
    password: string;

    @Field(type => AccessCodeRole)
    role: AccessCodeRole;
}