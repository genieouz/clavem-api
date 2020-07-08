import { IUser } from '~/user/interfaces/user.interface';
import { VALIDATION_CODE_CONFIG, TOKEN_OPTIONS } from '~/auth/auth.conf';
import { UserService } from '~/user/services/user.service';
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import {
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  TWILIO_PHONE_NUMBER,
} from '~/commons/config/env';
import { Twilio } from 'twilio';
import { TokenService } from '~/auth/services/token.service';
import { LoginDto } from '~/auth/dto/login.dto';
import { SessionEntity } from '~/auth/entities/session.entity';
import { UserEntity } from '~/user/entities/user.entity';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class AuthService {
  client: Twilio;
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {
    this.client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  }


  async signup(user: RegisterDto): Promise<SessionEntity> {
    const found = await this.userService.findOne({ email: user.email });
    if (found) {
      throw new ForbiddenException("Email déjà utilisé");
    }
    const createdUser: UserEntity = await this.userService.insertOne(user);
    const connectionToken: string = this.tokenService.sign(
      { sub: createdUser._id },
      TOKEN_OPTIONS.connectionTokenOption,
    );
    createdUser.password = null;
    const session: SessionEntity = { token: connectionToken, user: createdUser };
    return session;
  }

  async signin(credentials: LoginDto): Promise<SessionEntity> {
    const user = await this.userService.findOne(credentials);
    if (!user) {
      throw new NotFoundException('Ce compte n\'existe pas!');
    }
    const connectionToken: string = this.tokenService.sign(
      { sub: user._id },
      TOKEN_OPTIONS.connectionTokenOption,
    );
    user.password = null;
    const session: SessionEntity = { token: connectionToken, user: user };
    return session;
  }

}
