import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { InjectModel } from '@nestjs/mongoose';
import { accessCodeModelName } from './models/access-code.model-name';
import { Model } from 'mongoose';
import { AccessCodeEntity } from './entity/access-code.entity';

@Injectable()
export class AccessCodeService extends AbstractService<AccessCodeEntity> {
    constructor(
        @InjectModel(accessCodeModelName) private readonly accessCodeModel: Model<AccessCodeEntity>,
    ) {
        super(accessCodeModel);
    }
}
