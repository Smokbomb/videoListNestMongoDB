import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoService } from 'video/video.service';

@WebSocketGateway()
export class EventsGateway {
    constructor(private readonly videoService: VideoService) { }
    @WebSocketServer() server;

    @SubscribeMessage('video')
    async getVideo(client, id: string): WsResponse<any> {
        await this.videoService.updateLike(id);
        return await { 'video': await this.videoService.findAll() };
    }
}