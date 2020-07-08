import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { UserService } from "~/user/services/user.service";
import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/register.dto";
import { UserEntity } from "~/user/entities/user.entity";
import { IUser } from "~/user/interfaces/user.interface";
import { SessionEntity } from "~/auth/entities/session.entity";
import { AuthService } from "~/auth/services/auth.service";
import { UserRoles } from "~/user/enums/user-roles.enum";

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Query(returns => SessionEntity)
    login(
        @Args({ name: 'loginInput', type: () => LoginDto }) loginInput: LoginDto
    ): Promise<SessionEntity> {
        return this.authService.signin({ role: UserRoles.USER, ...loginInput });
    }

    @Mutation(returns => SessionEntity)
    register(
        @Args({ name: 'registerInput', type: () => RegisterDto }) registerDto: RegisterDto
    ): Promise<SessionEntity> {
        return this.authService.signup({ role: UserRoles.USER, ...registerDto }); 
    }
}