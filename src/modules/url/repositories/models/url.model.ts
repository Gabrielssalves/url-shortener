import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Url } from '../entities/url.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UrlModel {
    constructor(
        @InjectRepository(Url)
        private readonly repository: Repository<Url>
    ) {}

    async create(url: Url){
        return this.repository.save(url);
    }
}