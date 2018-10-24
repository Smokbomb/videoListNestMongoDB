import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) { }

    @Get()
    async findAll(): Promise<any[]> {
        await console.log(await this.videoService.findAll());
        return await this.videoService.findAll();
    }
    @Get(':id')
    findName(@Param() params) {
        return this.videoService.findById(params.id);
    }
    @Post()
    savePhoto(@Body() body) {
        if (body.like === '1') {
            this.videoService.updateLike(body.id);
        }
        if (body.view === '1') {
            this.videoService.updateView(body.id);
        }
    }
}
