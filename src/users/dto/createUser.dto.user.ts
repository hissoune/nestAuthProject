import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";


export class createusersettingsDto {
    @IsOptional()
    @IsBoolean()
    reciveNotifications?:boolean;
    @IsOptional()
    @IsBoolean()
    reciveEmails?:boolean;
    @IsOptional()
    @IsBoolean()

    reciveSms?:boolean;

}


export class createUserDto{
    @IsOptional()

    @IsNotEmpty()
    @IsString()
    username:string;
     @IsString()
     @IsOptional()
    displayName?:string;
    @IsOptional()
    @ValidateNested()
    @Type(()=>createusersettingsDto)
   settings?:createusersettingsDto
}