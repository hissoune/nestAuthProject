import { Prop, Schema ,SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSchemaSettings, userSettings } from "./userSettings.Schema";
import { Post } from "./posts.Schema";



@Schema()
export class User{

    @Prop({unique:true,required:true})
    username:string;

    @Prop({required:false})
    displayName?:string;

    @Prop({required:false})
    avatarUrl?:string;
    
    @Prop({type:mongoose.Schema.Types.ObjectId ,ref:'userSettings'})
    settings?:userSettings;
    @Prop({type:[{type:mongoose.Types.ObjectId,ref:'Post'}]})
    posts:Post[];
}

export const UserSchema =   SchemaFactory.createForClass(User)