import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';
// import { StaffModule } from 'staff/staff.module';
// import { PhotoModule } from 'photo/photo.module';
import { EventsModule } from 'socket/events/events.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoModule } from 'video/video.module';
import { FrontendMiddleware } from './modules/common/middleware/frontend/frontend.middleware';
@Module({
// MongooseModule.forRoot('mongodb://mongo:27017')
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/test'), VideoModule , EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor() { }
    configure(consumer: MiddlewareConsumer): void {
    consumer.apply(FrontendMiddleware).forRoutes(
      {
        path: '/**', // For all routes
        method: RequestMethod.GET , // For all methods
      },      {
        path: '/**', // For all routes
        method: RequestMethod.PATCH , // For all methods
      },
    );
  }
}
// export class AppModule implements NestModule {
//   constructor(private readonly connection: Connection) { }

// }