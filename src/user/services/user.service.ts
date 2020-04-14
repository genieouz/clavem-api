import { userModelName } from '~/user/user.model-name';
import { IUser } from '~/user/interfaces/user.interface';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '~/user/dto/user';
import { AbstractService } from '~/commons/services/abstract.service';

@Injectable()
export class UserService extends AbstractService<IUser> {
    constructor(
        @InjectModel(userModelName) private readonly userModel: Model<User>
    ) {
        super(userModel);
    }
}
