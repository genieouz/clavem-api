import { GraphqlAuthGuard } from '~/auth/auth.guard';
import { UserService } from '~/user/services/user.service';
import { CompleteRegistrationInput } from '~/auth/dto/complete-registration.input';
import { User } from '~/user/dto/user.type';
import { IUser } from '~/user/interfaces/user.interface';
import { IFinalizeRegistration } from '~/auth/interface/finalize-registration.interface';
import { FinalizeRegistrationInput } from '~/auth/dto/finalize-registration.input';
import { StartRegistration } from '~/auth/dto/start-registration.type';
import { IStartRegistration } from '~/auth/interface/start-register.interface';
import { StartRegistrationInput } from '~/auth/dto/start-registration.input';
import { AuthService } from '~/auth/services/auth.service';
import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { FinalizeRegistration } from '~/auth/dto/finalize-registration';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../decorators/current-user.decorator';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @Mutation(returns => StartRegistration)
  public startRegistration(
    @Args({
      name: 'startRegistrationInput',
      type: () => StartRegistrationInput,
    })
    startRegistrationInput: StartRegistrationInput,
  ): Promise<IStartRegistration> {
    return this.authService.startRegistration(startRegistrationInput);
  }

  @Mutation(returns => FinalizeRegistration)
  public finalizeRegistration(
    @Args({
      name: 'finalizeRegistrationInput',
      type: () => FinalizeRegistrationInput,
    })
    finalizeRegistrationInput: FinalizeRegistrationInput,
  ): Promise<IFinalizeRegistration> {
    return this.authService.finalizeRegistration(finalizeRegistrationInput);
  }


}