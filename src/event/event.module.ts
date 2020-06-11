import { Module, forwardRef } from '@nestjs/common';
import { EventController } from '~/event/event.controller';
import { EventService } from '~/event/event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { eventModelName } from '~/event/models/event.model-name';
import { EventSchema } from '~/event/models/schemas/event.schema';
import { AttachmentModule } from '~/attachment/attachment.module';
import { ImagesModule } from '~/multimedia/images/images.module';
import { ticketModelName } from '~/event/models/ticket.model-name';
import { TicketSchema } from '~/event/models/schemas/ticket.schema';
import { EventPublicController } from '~/event/event-public.controller';
import { EventResolver } from './resolvers/event.resolver';
import { EventPropertyResolver } from './resolvers/event-property.resolver';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: eventModelName, schema: EventSchema },
      { name: ticketModelName, schema: TicketSchema }
    ]),
    AttachmentModule,
    forwardRef(() => ImagesModule),
    forwardRef(() => UserModule)
  ],
  controllers: [EventController, EventPublicController],
  providers: [
    EventService,
    EventResolver,
    EventPropertyResolver,
  ],
  exports: [
    MongooseModule,
    EventService,
  ],
})
export class EventModule {}
