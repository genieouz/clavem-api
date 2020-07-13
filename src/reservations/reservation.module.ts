
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationResolver } from './resolvers/reservation.resolver';
import { ReservationPropertyResolver } from './resolvers/reservation-property.resolver';
import { UserModule } from '~/user/user.module';
import { ReservationService } from './service/reservation.service';
import { reservationModelName } from './models/reservation.model-name';
import { ReservationSchema } from './models/schema/reservation.schema';
import { EventModule } from '~/event/event.module';
import { CardModule } from '~/card/card.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: reservationModelName, schema: ReservationSchema },
        ]),
        forwardRef(() => UserModule),
        forwardRef(() => EventModule),
        forwardRef(() => CardModule)
    ],
    controllers: [],
    providers: [
        ReservationService,
        ReservationResolver,
        ReservationPropertyResolver,
    ],
    exports: [ReservationService, MongooseModule]
})
export class ReservationModule { }
