import { MigrationInterface, QueryRunner } from "typeorm";

export class INITIALMIGRATION1750303124768 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "url" (
                "id" SERIAL PRIMARY KEY,
                "originalUrl" VARCHAR NOT NULL,
                "shortUrlCode" VARCHAR NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "active" BOOLEAN NOT NULL DEFAULT true
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "url";
        `);
    }
}
