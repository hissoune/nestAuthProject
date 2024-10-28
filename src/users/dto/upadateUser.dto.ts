import { IsOptional, IsString } from "class-validator";



export class updateUserDto {
    @IsString()
    displayName?:string;
    @IsString()
    avatarUrl?:string;


}