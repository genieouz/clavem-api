import { ApiProperty } from "@nestjs/swagger";

export class FindManyResult<T> {
    @ApiProperty()
    recordsLength: number;

    @ApiProperty()
    totalRecords: number;

    @ApiProperty()
    records: T[];

    @ApiProperty()
    offset: number;

    @ApiProperty()
    limit: number;

    @ApiProperty()
    pages: number;

    @ApiProperty()
    currentPage: number;
}