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
      getVideo(client, id: any): Observable<WsResponse<any>> {
        const event = 'video';
        const response = this.videoService.findAll();
        this.videoService.updateLike(id);
        this.videoService.findAll();
        return from(response).pipe(
            map( data => ({ event, data })),
        );
    }
}