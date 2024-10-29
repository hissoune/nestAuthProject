import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { postsModule } from './posts/posts.module';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb://127.0.0.1/NEST_AUTH'),
    UsersModule,
    postsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
