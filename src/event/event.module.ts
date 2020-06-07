import { Module, forwardRef } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { eventModelName } from './event.model-name';
import { EventSchema } from './models/schemas/event.schema';
import { AttachmentModule } from '~/attachment/attachment.module';
import { ImagesModule } from '~/multimedia/images/images.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: eventModelName, schema: EventSchema }]),
    AttachmentModule,
    forwardRef(() => ImagesModule),
  ],
  controllers: [EventController],
  providers: [EventService],
  exports: [
    MongooseModule,
    EventService,
  ],
})
export class EventModule {}
