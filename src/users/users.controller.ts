import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { createUserDto } from "./dto/createUser.dto.user";
import mongoose from "mongoose";
import { updateUserDto } from "./dto/upadateUser.dto";




@Controller('users')

export class  usersControllser {
   
constructor(private usersService:UsersService){}
    @Post()
    @UsePipes(new ValidationPipe()) 
    createUser(@Body() createUserDto:createUserDto){
           return this.usersService.createUser(createUserDto)


    }
    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Get(':id')
    async  getUserById(@Param('id') id:string){
      const isValid =    mongoose.Types.ObjectId.isValid(id)
      if (!isValid)  throw new HttpException('user not found ' , 404);
      const findUser= await this.usersService.getUserById(id);
      if(!findUser) throw new HttpException('user not found ' , 404);

      return findUser;
    }

   @Patch(':id')
   @UsePipes(new ValidationPipe()) 

   async updateUser(@Param('id') id:string, @Body() updateUserDto:updateUserDto){
    const isValid =    mongoose.Types.ObjectId.isValid(id)
    if (!isValid)  throw new HttpException('userId is Invalid ' , 400);
     const updateduser = this.usersService.updateUser(id,updateUserDto);
     if(!updateduser) throw new HttpException('user not found',404);
     return updateduser;
   }

   @Delete(':id')
    async deletUser (@Param('id') id:string){
    const isValid =    mongoose.Types.ObjectId.isValid(id)
    if (!isValid)  throw new HttpException('userId is Invalid ' , 400);
    const deletedUser =await this.usersService.deletUser(id);
    if(!deletedUser)throw new HttpException('user not found ',404) 
        return; 
   }


}