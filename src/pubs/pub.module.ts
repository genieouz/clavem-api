import { PubService } from './pub.service';
import { PubController } from './pub.controller';
import { Module } from '@nestjs/common';
import { AttachmentModule } from '~/attachment/attachment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { pubModelName } from '~/pubs/models/pub.model-name';
import { PubSchema } from '~/pubs/models/schema/pub.schema';
import { PubResolver } from './resolvers/pub.resolver';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: pubModelName, schema: PubSchema },
        ]),
        AttachmentModule,
    ],
    controllers: [
        PubController,
    ],
    providers: [
        PubService,
        PubResolver,
    ],
})
export class PubModule { }
