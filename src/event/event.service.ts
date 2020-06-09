import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { eventModelName } from './models/event.model-name';
import { EventEntity } from './entity/event.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventService extends AbstractService<EventEntity> {
    constructor(
        @InjectModel(eventModelName) private readonly eventModel: Model<EventEntity>
    ) {
        super(eventModel);
    }
}

