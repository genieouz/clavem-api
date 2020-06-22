import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { eventModelName } from './models/event.model-name';
import { EventEntity } from './entity/event.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketDto } from './dto/ticket.dto';
import { IUpdateResult } from '~/commons/typings/mongoose.typings';

@Injectable()
export class EventService extends AbstractService<EventEntity> {
    constructor(
        @InjectModel(eventModelName) private readonly eventModel: Model<EventEntity>
    ) {
        super(eventModel);
    }

    createTicket(eventId: string, ticketDto: TicketDto): Promise<IUpdateResult> {
        return this.eventModel.update(
            { "_id": eventId },
            {
                "$push": {
                    "tickets": ticketDto
                }
            }
        );
    }

    removeTicket(eventId: string, ticketId: string): Promise<IUpdateResult> {
        return this.eventModel.update({ _id: eventId },
            { $pull: { "tickets": { _id: ticketId } } });
    }
}

