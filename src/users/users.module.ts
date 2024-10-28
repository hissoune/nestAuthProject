import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/user.schema";
import { UsersService } from "./users.service";
import { usersControllser } from "src/users/users.controller";


@Module({
    imports:[
        MongooseModule.forFeature([{
            name:User.name,
            schema:UserSchema
        }])
    ],
    providers:[UsersService],
    controllers:[usersControllser]

})
export class UsersModule {

}