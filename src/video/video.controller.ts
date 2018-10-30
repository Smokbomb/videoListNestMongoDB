import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VideoService } from './video.service';
import { Video } from './video.interface';

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) { }

    @Get()
    async findAll(): Promise<any[]> {
        return await this.videoService.findAll();
    }
    @Get(':id')
    findName(@Param() params) {
        return this.videoService.findById(params.id);
    }
    @Post()
    updatInfo(@Body() body) {
        if (body.like === '1') {
            this.videoService.updateLike(body.id);
        }
        if (body.view === '1') {
            this.videoService.updateView(body.id);
        }
    }

    @Put()
    saveVideo(@Body() video: Video) {
        this.videoService.create(video);
        return true ;
    }
    @Delete(':id')
    deleteById(@Param() params) {
        return this.videoService.removeById(params.id);
    }
}
