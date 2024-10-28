import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/user.schema";
import { UsersService } from "./users.service";
import { usersControllser } from "src/users/users.controller";
import { UserSchemaSettings, userSettings } from "src/schemas/userSettings.Schema";


@Module({
    imports:[
        MongooseModule.forFeature([
            
            {
            name:User.name,
            schema:UserSchema
           },
           {
            name: userSettings.name,
            schema:UserSchemaSettings,
           }
           
    
    ])
    ],
    providers:[UsersService],
    controllers:[usersControllser]

})
export class UsersModule {

}