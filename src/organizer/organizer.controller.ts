import { Controller, Get, UseGuards, Param, Query } from '@nestjs/common';
import { UserService } from '~/user/services/user.service';
import { UserRoles } from '~/user/enums/user.roles';
import { UserEntity } from '~/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { FindManyResult } from '~/commons/database/typings/find-many-result.interface';
import { IUser } from '~/user/interfaces/user.interface';
import { ClientFilterInput } from '~/commons/graphql/types-and-inputs/client-filter.input';

@Controller('organizers')
@UseGuards(AuthGuard('jwt'))
export class OrganizerController {
    constructor(private readonly userService: UserService) { }

    @Get()
    fetchOrganizers(@Query() clientFIlter: ClientFilterInput): Promise<FindManyResult<UserEntity>> {
        return this.userService.findMany({ role: UserRoles.ORGANIZER }, clientFIlter);
    }
}
