import { Module, forwardRef } from '@nestjs/common';
import { ImagesController } from '~/multimedia/images/controllers/images.controller';
import { imageProviders } from '~/multimedia/images/images.providers';
import { AvatarImageService } from '~/multimedia/images/services/avatar-image.service';
import { ThumbnailImageService } from '~/multimedia/images/services/thumbnail-image.service';
import { UserModule } from '~/user/user.module';
import { EventPosterService } from '~/multimedia/images/services/event-poster.service';
import { DatabaseModule } from '~/commons/database/database.module';
import { EventService } from '~/event/event.service';
import { EventModule } from '~/event/event.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    DatabaseModule,
    EventModule,
  ],
  controllers: [ImagesController],
  providers: [
    AvatarImageService,
    EventPosterService,
    ThumbnailImageService,
    ...imageProviders,
  ],
  exports: [
    EventPosterService,
  ]
})
export class ImagesModule { }
