import { CardModule } from './card/card.module';
import { databaseUrl } from '~/commons/database/database.url';
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '~/user/user.module';
import { AuthModule } from '~/auth/auth.module';
import { OrganizerModule } from './organizer/organizer.module';
import { CategoryModule } from './category/category.module';
import { EventModule } from './event/event.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MetricsModule } from './metrics/metrics.module';
import { PromotionalCodeModule } from './promotional-code/promotional-code.module';
import { AccessCodeModule } from './access-code/access-code.module';
import { ReservationModule } from './reservations/reservation.module';

@Module({
  imports: [
    CardModule,
    MongooseModule.forRoot(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      introspection: true,
      playground: true,
      installSubscriptionHandlers: true,
      context: async ({ req, connection }) => {
        if (connection) {
          // subscriptions
          return {
            req: {
              headers: { authorization: connection.context.Authorization },
            },
          };
        }
        // queries and mutations
        return { req };
      },
    }),
    forwardRef(() => UserModule),
    AuthModule,
    OrganizerModule,
    CategoryModule,
    EventModule,
    MultimediaModule,
    MetricsModule,
    PromotionalCodeModule,
    AccessCodeModule,
    ReservationModule,
  ],
})
export class AppModule { }
