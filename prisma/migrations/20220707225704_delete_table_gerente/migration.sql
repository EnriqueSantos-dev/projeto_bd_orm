/*
  Warnings:

  - You are about to drop the `gerentes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `gerenteId` on the `postos` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "gerentes_email_key";

-- DropIndex
DROP INDEX "gerentes_login_key";

-- DropIndex
DROP INDEX "gerentes_cpf_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "gerentes";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_postos" (
    "idPosto" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imgBg" TEXT
);
INSERT INTO "new_postos" ("cnpj", "endereco", "idPosto", "imgBg", "nome") SELECT "cnpj", "endereco", "idPosto", "imgBg", "nome" FROM "postos";
DROP TABLE "postos";
ALTER TABLE "new_postos" RENAME TO "postos";
CREATE UNIQUE INDEX "postos_cnpj_key" ON "postos"("cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
