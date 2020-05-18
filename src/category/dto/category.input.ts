import { ApiProperty } from '@nestjs/swagger';

export class CategoryInput {
    @ApiProperty()
    public name: string;
}
