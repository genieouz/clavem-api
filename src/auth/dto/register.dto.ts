import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
    @ApiProperty()
    public phoneNumber: string;

    @ApiProperty()
    public lastName: string;

    @ApiProperty()
    public firstName: string;

    @ApiProperty()
    public password: string;

    @ApiProperty()
    public email: string;
}