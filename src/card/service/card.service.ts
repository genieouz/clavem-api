import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { CardEntity } from '~/card/entities/card.entity';
import { InjectModel } from '@nestjs/mongoose';
import { cardModelName } from '~/card/models/card.model-name';
import { Model } from 'mongoose';

@Injectable()
export class CardService extends AbstractService<CardEntity>{
    constructor(
        @InjectModel(cardModelName) private readonly cardModel: Model<CardEntity>
    ) {
        super(cardModel);
    }
}
