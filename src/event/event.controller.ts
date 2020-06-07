import { Controller, Put, UseInterceptors, UseGuards, Body, UploadedFile, Post, UnprocessableEntityException, Param, Res, HttpStatus, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { IUser } from '~/user/interfaces/user.interface';
import { IncomingFile } from '~/commons/multimedia/typings/incoming-file';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { AttachmentRecord } from '~/attachment/dto/attachment-record.type';
import { EventService } from '~/event/event.service';
import { EventPosterService } from '~/multimedia/images/services/event-poster.service';
import { maxFileSizeForEventPosters } from 'dist/multimedia/images/images-restrictions';
import { allowedImageFormats } from '~/multimedia/images/images-restrictions';
import { imageFilter } from '~/multimedia/images/image-filter';
import { AuthGuard } from '~/auth/guards/auth-guard';

@Controller('event')
@UseGuards(AuthGuard)
export class EventController {
    constructor(
        private readonly attachmentsService: AttachmentsService,
        private readonly eventPosterService: EventPosterService,
        private eventService: EventService,
    ) {}
    @Post('create')
    @UseInterceptors(FileInterceptor('file'))
    public async createEvent(
        @Body('targetRef') targetRef: string,
        @UploadedFile() file: IncomingFile,
        @CurrentUser() currentUser: IUser,
    ): Promise<AttachmentRecord> {
        if (file === undefined) {
            const errorMessage = `Supported image formats: ${allowedImageFormats.join(
                ', ',
            )}; Max file size: ${maxFileSizeForEventPosters} bytes`;
            throw new UnprocessableEntityException(errorMessage);
        }
         this.eventPosterService.rewriteEventPoster(file, 'eventId');
        await this.attachmentsService.failIfFound({
            targetRef,
        });

         this.attachmentsService.putAttachment(
            file,
            {
                uploadedBy: currentUser._id,
            },
            currentUser._id,
        );
        return;
    }

    // @UseGuards(AuthGuard('jwt'))
    @Put('poster')
    @UseInterceptors(FileInterceptor('file', { fileFilter: imageFilter }))
    public async uploadAvatar(
        @UploadedFile() file: IncomingFile,
        currentUser: IUser = { _id: '5e9aca1fd1c3ad155b6d1c10' } as IUser,
    ): Promise<any> {
        console.log(currentUser);
        if (file === undefined) {
            const errorMessage = `Supported image formats: ${allowedImageFormats.join(
                ', ',
            )}; Max file size: ${maxFileSizeForEventPosters} bytes`;
            throw new UnprocessableEntityException(errorMessage);
        }
        return this.eventPosterService.rewriteEventPoster(file, 'eventId');
    }

    @Get('poster/:id')
    public async getAvatar(@Param('id') id: string, @Res() res): Promise<void> {
        const rs = await this.eventPosterService.findOneById(id);
        if (rs === null) {
            return res.sendStatus(HttpStatus.NOT_FOUND);
        }
        rs.pipe(res);
    }
}
