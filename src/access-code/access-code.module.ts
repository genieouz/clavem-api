import { Module } from '@nestjs/common';
import { AccessCodeResolver } from '~/access-code/resolvers/access-code.resolver';
import { AccessCodeService } from '~/access-code/access-code.service';
import { MongooseModule } from '@nestjs/mongoose';
import { accessCodeModelName } from '~/access-code/models/access-code.model-name';
import { AccessCodeSchema } from '~/access-code/models/schemas/access-code.schema';
import { AccessCodePropertyResolver } from '~/access-code/resolvers/access-code-property.resolver';
import { UserModule } from '~/user/user.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: accessCodeModelName, schema: AccessCodeSchema }]),
        UserModule
    ],
    providers: [
        AccessCodeResolver,
        AccessCodePropertyResolver,
        AccessCodeService,
    ]
})
export class AccessCodeModule { }
