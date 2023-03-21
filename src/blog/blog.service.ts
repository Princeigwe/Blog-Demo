import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog) private blogRepo: Repository<Blog>
    ){}

    async createBlogArticle(title: string, story: string){
        const article = this.blogRepo.create({title, story})
        return await this.blogRepo.save(article)
    }

    async readBlogArticle(id: number){
        const article = await this.blogRepo.findOne({where: {id}})
        return article
    }
}
