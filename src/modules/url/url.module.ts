import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UrlService } from './services/url.service'
import { Url } from './repositories/entities/url.entity'
import { UrlController } from './controllers/url.controller'
import { UrlModel } from './repositories/models/url.model'

@Module({
    imports: [TypeOrmModule.forFeature([Url])],
    providers: [UrlService, UrlModel],
    controllers: [UrlController]
})

export class UrlModule {}