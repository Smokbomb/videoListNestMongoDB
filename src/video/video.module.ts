import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';
import { VideoSchema } from './video.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'videos', schema: VideoSchema }])],
  controllers: [VideoController],
  providers: [VideoService],
  exports: [VideoService],
})
export class VideoModule { }