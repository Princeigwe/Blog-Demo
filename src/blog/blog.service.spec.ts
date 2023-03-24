import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
import { getRepositoryToken } from "@nestjs/typeorm"


describe('BlogService', () => {
  let service: BlogService;

  function mockBlogRepository(dto:any) {
    this.data = dto;
    this.save  = () => { return this.data }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BlogService,
        {
          provide: getRepositoryToken(Blog),
          useValue:mockBlogRepository
        }
      ],
    }).compile();

    service = module.get<BlogService>(BlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
