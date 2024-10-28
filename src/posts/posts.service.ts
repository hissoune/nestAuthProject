import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "src/schemas/posts.Schema";
import { createpostDto } from "./dto/createPost.dto";

@Injectable()

export class postsService{
  

    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>
    ){}

    createPost(createpostDto:createpostDto){
        const newPost = new this.postModel(createpostDto);
        return newPost.save()

    }



}