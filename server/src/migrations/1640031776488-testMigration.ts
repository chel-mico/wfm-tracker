import {MigrationInterface, QueryRunner} from "typeorm";

export class testMigration1640031776488 implements MigrationInterface {
    name = 'testMigration1640031776488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fridgeId" integer, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_7522f14622518f2125476192d2" UNIQUE ("fridgeId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe_step" ("id" SERIAL NOT NULL, "desc" text NOT NULL, "stepNum" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "recipeId" integer, CONSTRAINT "PK_654c0969ac0899d321c00ea0eaf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "title" text NOT NULL, "saves" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "authorId" integer, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe_ingredient" ("id" SERIAL NOT NULL, "name" text NOT NULL, "quantity" integer NOT NULL, "ingredientId" integer, "recipeId" integer, CONSTRAINT "PK_a13ac3f2cebdd703ac557c5377c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fridge_ingredient" ("id" SERIAL NOT NULL, "measurement" text NOT NULL, "quantity" double precision NOT NULL, "ingredientId" integer, "fridgeId" integer, CONSTRAINT "PK_bec6c95d9b48260154718b329dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fridge" ("id" SERIAL NOT NULL, CONSTRAINT "PK_27ce3d8ff1f4465f90e7c2a9b56" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_7522f14622518f2125476192d25" FOREIGN KEY ("fridgeId") REFERENCES "fridge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD CONSTRAINT "FK_1c52f396004dadfb9357f762268" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "FK_1370c876f9d4a525a45a9b50d81" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_2879f9317daa26218b5915147e7" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_1ad3257a7350c39854071fba211" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD CONSTRAINT "FK_0238d4f6f93a9bb181dfe091e49" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD CONSTRAINT "FK_2646b560f38b14d71d30727a2de" FOREIGN KEY ("fridgeId") REFERENCES "fridge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP CONSTRAINT "FK_2646b560f38b14d71d30727a2de"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP CONSTRAINT "FK_0238d4f6f93a9bb181dfe091e49"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_1ad3257a7350c39854071fba211"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_2879f9317daa26218b5915147e7"`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "FK_1370c876f9d4a525a45a9b50d81"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP CONSTRAINT "FK_1c52f396004dadfb9357f762268"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_7522f14622518f2125476192d25"`);
        await queryRunner.query(`DROP TABLE "fridge"`);
        await queryRunner.query(`DROP TABLE "fridge_ingredient"`);
        await queryRunner.query(`DROP TABLE "ingredient"`);
        await queryRunner.query(`DROP TABLE "recipe_ingredient"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
        await queryRunner.query(`DROP TABLE "recipe_step"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
