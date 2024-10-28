import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, postSchema } from "src/schemas/posts.Schema";
import { postsService } from "./posts.service";
import { postsController } from "./posts.controller";



@Module({
    imports:[
        MongooseModule.forFeature([{
            name:Post.name,
            schema:postSchema
        }])
    ],
    controllers:[postsController],
    providers:[postsService],
})
export class postsModule{

}
