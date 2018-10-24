import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { VideoModule } from 'video/video.module';
@Module({
    imports: [VideoModule],
    providers: [EventsGateway],
})
export class EventsModule { }