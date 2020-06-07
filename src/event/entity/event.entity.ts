import { ApiProperty } from '@nestjs/swagger';
import { ImageSizes } from '~/commons/graphql/types-and-inputs/image-sizes.type';

export class EventEntity {
    @ApiProperty()
    public _id: string;

    @ApiProperty()
    public description: string;

    @ApiProperty()
    public address: string;

    @ApiProperty()
    public date: Date;

    @ApiProperty()
    public statut: string;

    @ApiProperty()
    public poster: ImageSizes;
}