import { Body, Controller, Get, Post, Request } from '@nestjs/common'
import { UrlService } from '../services/url.service'
import { CreateUrlPayload } from '../payloads/createUrl.payload'

@Controller("/urls")
export class UrlController{
    constructor(private readonly urlService: UrlService) {}

    @Post('/')
    async create(
        @Body() payload: CreateUrlPayload
    ) : Promise<any>{
        await this.urlService.generateShortUrl(payload.url);
        return;
    }
}