import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { promotionalCodeModelName } from './models/promotional-code.model-name';
import { PromotionalCodeEntity } from './entity/promotional-code.entity';

@Injectable()
export class PromotionalCodeService extends AbstractService<PromotionalCodeEntity> {
    constructor(
        @InjectModel(promotionalCodeModelName) private readonly promotionalCodeModel: Model<PromotionalCodeEntity>
    ) {
        super(promotionalCodeModel);
    }
}

