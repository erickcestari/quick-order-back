import { MigrationInterface, QueryRunner } from "typeorm";

export class Script1714692544871 implements MigrationInterface {
    name = 'Script1714692544871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "defect" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "productId" character varying NOT NULL, "dateCreated" TIMESTAMP NOT NULL DEFAULT now(), "dateUpdated" TIMESTAMP NOT NULL DEFAULT now(), "dateDeleted" TIMESTAMP, CONSTRAINT "PK_79534adc9e0edaf32589fe26959" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "defect"`);
    }

}
