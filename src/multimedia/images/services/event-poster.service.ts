import { Inject, Injectable } from '@nestjs/common';
import { eventPosterBucketName } from '~/multimedia/images/bucket-names';
import {
  MongooseGridFSBucketFile,
  MongooseGridFsModel,
} from '~/commons/typings/gridfs.typings';
import { IncomingFile } from '~/multimedia/incoming-file';
import { ImageSize } from '~/multimedia/enums/image-size.enum';
import { FilePurpose } from '~/multimedia/enums/file-purpose.enum';
import { Jimp } from '~/commons/typings/jimp.typings';
import { ImageSizes } from '~/commons/graphql/types-and-inputs/image-sizes.type';
import { Connection } from 'mongoose';
import { AbstractBucket } from '~/commons/services/abstract.bucket';
import { databaseConnectionName } from '~/commons/database/database-connection-name';
import { EventService } from '~/event/event.service';
import { IEvent } from '~/event/interface/event.interface';
import { transformBufferToReadableStream } from '~/commons/multimedia/utils';

@Injectable()
export class EventPosterService extends AbstractBucket {
  constructor(
    @Inject(databaseConnectionName) connection: Connection,
    @Inject(eventPosterBucketName)
    private readonly bucket: MongooseGridFsModel,
    private readonly eventService: EventService,
  ) {
    super(bucket, eventPosterBucketName, connection);
  }

  public async rewriteEventPoster(
    incomingFile: IncomingFile,
    eventId: string,
  ): Promise<ImageSizes> {
    const event = await this.eventService.findOneByIdOrFail(eventId);
    const lgImage = await this.writeEventPosterSize(
      incomingFile,
      ImageSize.Lg,
      event,
    );
    const mdImage = await this.writeEventPosterSize(
      incomingFile,
      ImageSize.Md,
      event,
    );
    const smImage = await this.writeEventPosterSize(
      incomingFile,
      ImageSize.Sm,
      event,
    );

    const eventPosterSizesObject: ImageSizes = {
      lg: lgImage._id,
      md: mdImage._id,
      sm: smImage._id,
    };

    await this.eventService.updateOneById(eventId, {
      poster: eventPosterSizesObject,
    });
    const previousEventPostersIds = Object.values(event.poster)
      .filter(id => id !== true)
      .filter(Boolean);

    // remove previous avatar images
    if (previousEventPostersIds.length) {
      await this.removeManyByIds(previousEventPostersIds);
    }

    return eventPosterSizesObject;
  }

  public async writeEventPosterSize(
    incomingFile,
    imageSize: ImageSize,
    event: IEvent,
  ): Promise<MongooseGridFSBucketFile> {
    return new Promise(async (resolve, reject) => {
      const jimpImg = await Jimp.read(incomingFile.buffer);
      const frameSize = this.getImageFrameSize(imageSize);

      const imageBuff: Buffer = await jimpImg
        .cover(frameSize, frameSize)
        .quality(80)
        .getBufferAsync(Jimp.MIME_JPEG);

      const rs = transformBufferToReadableStream(imageBuff);
      const options = {
        filename: incomingFile.originalname,
        contentType: incomingFile.mimetype,
        metadata: {
          size: ImageSize,
          purpose: FilePurpose.ProgramPoster,
        },
      };

      this.bucket.write(
        options,
        rs,
        (error: Error, writtenFile: MongooseGridFSBucketFile) => {
          return error !== null ? reject(error) : resolve(writtenFile);
        },
      );
    });
  }
}
