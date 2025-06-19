import { Injectable } from "@nestjs/common"
import { UrlModel } from "../repositories/models/url.model"
import { Url } from "../repositories/entities/url.entity";

@Injectable()
export class UrlService {
    constructor(
        private readonly repository: UrlModel
    ) {}

    async generateShortUrl(originalUrl: string) {
        const code = 'flkajdshfdoi';
        const url = new Url ();
        
        url.originalUrl = originalUrl;
        url.shortUrlCode = code;

        await this.repository.create(url);
    }
}