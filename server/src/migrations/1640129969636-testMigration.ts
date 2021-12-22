import {MigrationInterface, QueryRunner} from "typeorm";

export class testMigration1640129969636 implements MigrationInterface {
    name = 'testMigration1640129969636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "savedRecipes" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD "recipeID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD "authorID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "measurement" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "ingredientID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "recipeID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD "ingredientID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD "fridgeID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fridge" ADD "ownerID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "FK_1370c876f9d4a525a45a9b50d81"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_7522f14622518f2125476192d25"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_7522f14622518f2125476192d2"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fridgeId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fridgeId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_7522f14622518f2125476192d25" UNIQUE ("fridgeId")`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP CONSTRAINT "FK_1c52f396004dadfb9357f762268"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP CONSTRAINT "PK_654c0969ac0899d321c00ea0eaf"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD CONSTRAINT "PK_654c0969ac0899d321c00ea0eaf" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP COLUMN "recipeId"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD "recipeId" uuid`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_1ad3257a7350c39854071fba211"`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "PK_e365a2fedf57238d970e07825ca"`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipe" ALTER COLUMN "saves" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "authorId"`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD "authorId" uuid`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_2879f9317daa26218b5915147e7"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "PK_a13ac3f2cebdd703ac557c5377c"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "PK_a13ac3f2cebdd703ac557c5377c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "quantity" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "ingredientId"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "ingredientId" uuid`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "recipeId"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "recipeId" uuid`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP CONSTRAINT "FK_0238d4f6f93a9bb181dfe091e49"`);
        await queryRunner.query(`ALTER TABLE "ingredient" DROP CONSTRAINT "PK_6f1e945604a0b59f56a57570e98"`);
        await queryRunner.query(`ALTER TABLE "ingredient" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "ingredient" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "ingredient" ADD CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP CONSTRAINT "FK_2646b560f38b14d71d30727a2de"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP CONSTRAINT "PK_bec6c95d9b48260154718b329dd"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD CONSTRAINT "PK_bec6c95d9b48260154718b329dd" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP COLUMN "ingredientId"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD "ingredientId" uuid`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP COLUMN "fridgeId"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD "fridgeId" uuid`);
        await queryRunner.query(`ALTER TABLE "fridge" DROP CONSTRAINT "PK_27ce3d8ff1f4465f90e7c2a9b56"`);
        await queryRunner.query(`ALTER TABLE "fridge" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "fridge" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "fridge" ADD CONSTRAINT "PK_27ce3d8ff1f4465f90e7c2a9b56" PRIMARY KEY ("id")`);
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
        await queryRunner.query(`ALTER TABLE "fridge" DROP CONSTRAINT "PK_27ce3d8ff1f4465f90e7c2a9b56"`);
        await queryRunner.query(`ALTER TABLE "fridge" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "fridge" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fridge" ADD CONSTRAINT "PK_27ce3d8ff1f4465f90e7c2a9b56" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP COLUMN "fridgeId"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD "fridgeId" integer`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP COLUMN "ingredientId"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD "ingredientId" integer`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP CONSTRAINT "PK_bec6c95d9b48260154718b329dd"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD CONSTRAINT "PK_bec6c95d9b48260154718b329dd" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD CONSTRAINT "FK_2646b560f38b14d71d30727a2de" FOREIGN KEY ("fridgeId") REFERENCES "fridge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient" DROP CONSTRAINT "PK_6f1e945604a0b59f56a57570e98"`);
        await queryRunner.query(`ALTER TABLE "ingredient" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "ingredient" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ingredient" ADD CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" ADD CONSTRAINT "FK_0238d4f6f93a9bb181dfe091e49" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "recipeId"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "recipeId" integer`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "ingredientId"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "ingredientId" integer`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "PK_a13ac3f2cebdd703ac557c5377c"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "PK_a13ac3f2cebdd703ac557c5377c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_2879f9317daa26218b5915147e7" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "authorId"`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "recipe" ALTER COLUMN "saves" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "PK_e365a2fedf57238d970e07825ca"`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_1ad3257a7350c39854071fba211" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP COLUMN "recipeId"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD "recipeId" integer`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP CONSTRAINT "PK_654c0969ac0899d321c00ea0eaf"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD CONSTRAINT "PK_654c0969ac0899d321c00ea0eaf" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD CONSTRAINT "FK_1c52f396004dadfb9357f762268" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_7522f14622518f2125476192d25"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fridgeId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fridgeId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_7522f14622518f2125476192d2" UNIQUE ("fridgeId")`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_7522f14622518f2125476192d25" FOREIGN KEY ("fridgeId") REFERENCES "fridge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "FK_1370c876f9d4a525a45a9b50d81" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fridge" DROP COLUMN "ownerID"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP COLUMN "fridgeID"`);
        await queryRunner.query(`ALTER TABLE "fridge_ingredient" DROP COLUMN "ingredientID"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "recipeID"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "ingredientID"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP COLUMN "measurement"`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "authorID"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" DROP COLUMN "recipeID"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "savedRecipes"`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recipe_step" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
