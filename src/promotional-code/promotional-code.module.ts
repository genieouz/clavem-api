import { Module } from '@nestjs/common';
import { PromotionalCodeResolver } from '~/promotional-code/resolvers/promotional-code.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { promotionalCodeModelName } from '~/promotional-code/models/promotional-code.model-name';
import { PromotionalCodeSchema } from '~/promotional-code/models/schemas/promotional-code.schema';
import { PromotionalCodeService } from '~/promotional-code/promotional-code.service';
import { PromotionalCodePropertyResolver } from '~/promotional-code/resolvers/promotional-code-property.resolver';
import { EventModule } from '~/event/event.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: promotionalCodeModelName, schema: PromotionalCodeSchema }]),
        EventModule,
    ],
    providers: [
        PromotionalCodeResolver,
        PromotionalCodeService,
        PromotionalCodePropertyResolver,
    ]
})
export class PromotionalCodeModule { }
