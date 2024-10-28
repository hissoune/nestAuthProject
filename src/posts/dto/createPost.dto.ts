import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class createpostDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    title:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    content:string;

}