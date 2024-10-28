import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { createUserDto } from "./dto/createUser.dto.user";
import { updateUserDto } from "./dto/upadateUser.dto";



@Injectable()

export class UsersService {


    constructor(
        @InjectModel(User.name) private userModele:Model<User>
    ){}

    createUser(createUserDto:createUserDto){
      const newUser = new this.userModele(createUserDto)

      return newUser.save();
    }

    getUsers(){
        return this.userModele.find();
    }

    getUserById(id:string){
        return  this.userModele.findById(id);
    }

    updateUser (id:string, updateUserDto:updateUserDto){

      return  this.userModele.findByIdAndUpdate(id,updateUserDto,{new:true})
    }

    deletUser(id:string){
        return this.userModele.findByIdAndDelete(id);

    }
}