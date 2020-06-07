import { JwtStrategy } from '~/auth/jwt.strategy';
import { UserModule } from '~/user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from '~/auth/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TOKEN_SECRET } from '~/commons/config/env';
import { TokenService } from './services/token.service';
import { AuthController } from './controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: TOKEN_SECRET,
      
    }),
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    JwtStrategy,
    TokenService
  ],
})
export class AuthModule { }
