import { CardService } from './service/card.service';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { cardModelName } from './models/card.model-name';
import { CardSchema } from './models/schema/card.schema';
import { CardResolver } from './resolvers/card.resolver';
import { CardPropertyResolver } from './resolvers/card-property.resolver';
import { UserModule } from '~/user/user.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: cardModelName, schema: CardSchema },
        ]),
        forwardRef(() => UserModule)
    ],
    controllers: [],
    providers: [
        CardService,
        CardResolver,
        CardPropertyResolver,
    ],
    exports: [CardService, MongooseModule]
})
export class CardModule { }
