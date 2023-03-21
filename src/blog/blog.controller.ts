import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { BlogDto } from './dtos/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(
        private blogService: BlogService
    ){}

    @Post()
    async createBlogArticle( @Body() body: BlogDto ) {
        return await this.blogService.createBlogArticle(body.title, body.story)
    }

    @Get(':id/')
    async readBlogArticle( @Param('id') id: number) {
        return await this.blogService.readBlogArticle(id)
    }
}
