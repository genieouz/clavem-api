import { Controller, Post, Body } from '@nestjs/common';
import { IUser } from '~/user/interfaces/user.interface';
import { AuthService } from '../services/auth.service';
import { ISession } from '../interface/session.interface';
import { ILoginCredentials } from '../interface/login-credentials.interface';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    signup(@Body() user: IUser): Promise<ISession> {
        return this.authService.signup(user);
    }

    @Post('signin')
    signin(@Body() credentials: ILoginCredentials): Promise<ISession> {
        return this.authService.signin(credentials);
    }
}
