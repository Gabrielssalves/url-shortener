import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

export const dataSourceOptions = (entitiesPath?: string, migrationsPath?: string): DataSourceOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
    entities: [entitiesPath ?? (__dirname + '/../../modules/**/repositories/entities/*.entity{.ts,.js}')],
    migrations: [ migrationsPath ?? (__dirname +  '/../migrations/*{.ts,.js}')]
});