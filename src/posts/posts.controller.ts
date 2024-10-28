import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { createpostDto } from "./dto/createPost.dto";
import { postsService } from "./posts.service";


@Controller('posts')
export class postsController{
  constructor(private postsService:postsService ){}
@Post()
@UsePipes(new ValidationPipe())
createPost(
    @Body()createpostDto:createpostDto
){
   return this.postsService.createPost(createpostDto)
}
}