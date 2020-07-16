import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { AuthGuard } from '~/auth/guards/auth-guard';
import { IncomingFile } from '~/multimedia/incoming-file';
import { IUser } from '~/user/interfaces/user.interface';
import { PubDto } from '~/pubs/dto/pub.dto';
import { PubService } from '~/pubs/pub.service';
import { IPub } from './models/interfaces/pub.interface';

@UseGuards(AuthGuard)
@Controller('pub')
export class PubController {
    constructor(
        private readonly attachmentsService: AttachmentsService,
        private readonly pubService: PubService,
        ) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    public async post(
        @Body() pubDto: any,
        @CurrentUser() currentUser: IUser,
        @UploadedFile() file: IncomingFile,
    ): Promise<IPub> {
        pubDto.createdBy = currentUser._id;
        pubDto.startDate = new Date(pubDto.startDate + ' ' + pubDto.startTime);
        pubDto.endDate = new Date(pubDto.endDate + ' ' + pubDto.endTime);
        const attachment = await this.attachmentsService.putAttachment(
            file,
            {
                uploadedBy: currentUser._id,
            },
            currentUser._id,
        )
        return this.pubService.insertOne({attachment: attachment.id, ...pubDto});
    }
}
