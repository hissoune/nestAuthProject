import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { createUserDto } from "./dto/createUser.dto.user";
import { updateUserDto } from "./dto/upadateUser.dto";
import { userSettings } from "src/schemas/userSettings.Schema";



@Injectable()

export class UsersService {


    constructor(
        @InjectModel(User.name) private userModele:Model<User>,
        @InjectModel(userSettings.name) private userSettingsModele:Model<userSettings>
    ){}

   async createUser({settings,...createUserDto}:createUserDto){
      if(settings){
           const newSettings = new this.userSettingsModele(settings)
         const savedSettings = await  newSettings.save()

         const neUser = new this.userModele({
            ...createUserDto,
            settings:savedSettings._id,
         });
         return neUser.save();
      }
      const newUser = new this.userModele(createUserDto)

      return newUser.save();
    }

    getUsers(){
        return this.userModele.find().populate('settings');
    }

    getUserById(id:string){
        return  this.userModele.findById(id).populate('settings');
    }

    updateUser (id:string, updateUserDto:updateUserDto){

      return  this.userModele.findByIdAndUpdate(id,updateUserDto,{new:true})
    }

    deletUser(id:string){
        return this.userModele.findByIdAndDelete(id);

    }
}