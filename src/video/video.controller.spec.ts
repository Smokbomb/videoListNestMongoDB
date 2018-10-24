import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from './video.controller';

describe('Video Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [VideoController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: VideoController = module.get<VideoController>(VideoController);
    expect(controller).toBeDefined();
  });
});
