import { UserEntity } from "~/user/entities/user.entity";

export class SessionEntity {
    token: string;
    user: UserEntity;
}