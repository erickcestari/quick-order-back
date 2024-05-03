import { MigrationInterface, QueryRunner } from "typeorm";

export class Script1714695348597 implements MigrationInterface {
    name = 'Script1714695348597'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "defect" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "defect" DROP COLUMN "description"`);
    }

}
