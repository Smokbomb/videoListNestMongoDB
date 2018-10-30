import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Video } from './video.interface';
import { CreateVideoDto } from './create-video.dto';
@Injectable()
export class VideoService {
    constructor(@InjectModel('videos') private readonly videoModel: Model<any>) { }

    async create(createVideoDto: CreateVideoDto): Promise<Video> {
        const createdVideo = new this.videoModel(createVideoDto);
        return await createdVideo.save();
      }
    async findAll() {
        return await this.videoModel.find({}).sort({score: 'desc'}).exec();
    }

    async updateLike(id) {
        const videoList = await this.videoModel.find({ _id: id }).exec();
        await this.videoModel.update(
            { _id: id },
            { like: videoList[0].like + 1 , score: videoList[0].score + 5 },
            { upsert: true },
        ).exec();
    }
    async updateView(id) {
        const videoList = await this.videoModel.find({ _id: id }).exec();
        await this.videoModel.update(
            { _id: id },
            { view: videoList[0].view + 1 , score: videoList[0].score + 1},
            { upsert: true },
        ).exec();
    }
    async findById(id) {
        return await this.videoModel.find({ _id: id }).exec();
    }
    async removeById(id) {
        this.videoModel.remove({ _id: id }).exec();
        return true ;
    }
}
