import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";





@Schema()
export class userSettings {
    @Prop({required:false})
    reciveNotifications?:boolean;
    @Prop({required:false})
    reciveEmails?:boolean;
    @Prop({required:false})
    reciveSms?:boolean;
}

export const UserSchemaSettings = SchemaFactory.createForClass(userSettings)