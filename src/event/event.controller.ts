import { Controller, Put, UseInterceptors, UseGuards, Body, UploadedFile, Post, UnprocessableEntityException, Param, Res, HttpStatus, Get, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { IUser } from '~/user/interfaces/user.interface';
import { IncomingFile } from '~/commons/multimedia/typings/incoming-file';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { AttachmentRecord } from '~/attachment/dto/attachment-record.type';
import { EventService } from '~/event/event.service';
import { EventPosterService } from '~/multimedia/images/services/event-poster.service';
import { maxFileSizeForEventPosters } from '~/multimedia/images/images-restrictions';
import { allowedImageFormats } from '~/multimedia/images/images-restrictions';
import { imageFilter } from '~/multimedia/images/image-filter';
import { AuthGuard } from '~/auth/guards/auth-guard';
import { EventDto } from '~/event/dto/event.dto';
import { EventEntity } from '~/event/entity/event.entity';
import { AnyObject } from '~/commons/typings/typescript';

@Controller('event')
@UseGuards(AuthGuard)
export class EventController {
    constructor(
        private readonly attachmentsService: AttachmentsService,
        private readonly eventPosterService: EventPosterService,
        private eventService: EventService,
    ) {}
    @Post('create')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'poster', maxCount: 1 },
        { name: 'archives', maxCount: 50 },
    ]))
    public async createEvent(
        @Body() eventDto: AnyObject,
        @UploadedFiles() files,
        @CurrentUser() currentUser: IUser,
    ): Promise<EventEntity> {
        eventDto = JSON.parse(eventDto.formStringify);
        const poster = files.poster[0];
        const archives = files.archives;
        eventDto.createdBy = currentUser._id;
        const event = await this.eventService.insertOne(eventDto);
        if (poster === undefined) {
            const errorMessage = `Supported image formats: ${allowedImageFormats.join(
                ', ',
            )}; Max file size: ${maxFileSizeForEventPosters} bytes`;
            throw new UnprocessableEntityException(errorMessage);
        }
        this.eventPosterService.rewriteEventPoster(poster, event._id);
        const archiveFiles: Promise<AttachmentRecord>[] = [];
        if(archives && archives.length) {
            archives.map((file: IncomingFile) => {
                archiveFiles.push(this.attachmentsService.putAttachment(
                    file,
                    {
                        uploadedBy: currentUser._id,
                    },
                    currentUser._id,
                ));
            });
        }
        return this.eventService.updateOneById(event._id, {
            archives: await Promise.all(archiveFiles),
        });
    }

    @Put('poster')
    @UseInterceptors(FileInterceptor('file', { fileFilter: imageFilter }))
    public async uploadPoster(
        @Body('eventId') eventId: string, 
        @UploadedFile() file: IncomingFile,
        @CurrentUser() currentUser: IUser,
    ): Promise<any> {
        if (file === undefined) {
            const errorMessage = `Supported image formats: ${allowedImageFormats.join(
                ', ',
            )}; Max file size: ${maxFileSizeForEventPosters} bytes`;
            throw new UnprocessableEntityException(errorMessage);
        }
        return this.eventPosterService.rewriteEventPoster(file, eventId);
    }
}
