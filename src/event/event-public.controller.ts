import { Controller, UseGuards, Param, Res, HttpStatus, Get } from '@nestjs/common';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { EventService } from '~/event/event.service';
import { EventPosterService } from '~/multimedia/images/services/event-poster.service';
import { AuthGuard } from '~/auth/guards/auth-guard';

@Controller('event')
export class EventPublicController {
    constructor(
        private readonly attachmentsService: AttachmentsService,
        private readonly eventPosterService: EventPosterService,
        private eventService: EventService,
    ) { }

    @Get('poster/:id')
    public async getPoster(@Param('id') id: string, @Res() res): Promise<void> {
        const rs = await this.eventPosterService.findOneById(id);
        if (rs === null) {
            return res.sendStatus(HttpStatus.NOT_FOUND);
        }
        rs.pipe(res);
    }
}
