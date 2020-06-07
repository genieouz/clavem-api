import { UserEntity } from "~/user/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";


export class SessionEntity {
    @ApiProperty()
    token: string;

    @ApiProperty({ type: UserEntity })
    user: UserEntity;
}