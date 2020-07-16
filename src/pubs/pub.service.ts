import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { PubEntity } from '~/pubs/entities/pub.entity';
import { Model } from 'mongoose';
import { pubModelName } from '~/pubs/models/pub.model-name';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PubService extends AbstractService<PubEntity> {
    constructor(
        @InjectModel(pubModelName) private readonly pubModel: Model<PubEntity>
    ) {
        super(pubModel);
    }
}
