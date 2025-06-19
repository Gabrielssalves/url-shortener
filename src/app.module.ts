import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './shared/db/config/typeorm.config';
import { UrlModule } from './modules/url/url.module';

const options = dataSourceOptions(__dirname + '/modules/**/repositories/entities/*.entity{.ts,.js}',__dirname + '/shared/db/migrations/*{.ts, .js}');
console.log(options.migrations, options.entities)

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    UrlModule
  ]
})
export class AppModule { }
