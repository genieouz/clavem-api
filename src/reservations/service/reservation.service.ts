import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { CardEntity } from '~/card/entities/card.entity';
import { InjectModel } from '@nestjs/mongoose';
import { reservationModelName } from '~/reservations/models/reservation.model-name';
import { Model } from 'mongoose';
import { ReservationEntity } from '../entities/reservation.entity';

@Injectable()
export class ReservationService extends AbstractService<ReservationEntity>{
    constructor(
        @InjectModel(reservationModelName) private readonly reservationModel: Model<ReservationEntity>
    ) {
        super(reservationModel);
    }
}
