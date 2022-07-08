/*
  Warnings:

  - You are about to drop the column `postoIdPosto` on the `gerentes` table. All the data in the column will be lost.
  - You are about to drop the column `gerenteIdGerente` on the `postos` table. All the data in the column will be lost.
  - Added the required column `gerenteId` to the `postos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_gerentes" (
    "idGerente" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_gerentes" ("cpf", "email", "idGerente", "login", "nome", "senha") SELECT "cpf", "email", "idGerente", "login", "nome", "senha" FROM "gerentes";
DROP TABLE "gerentes";
ALTER TABLE "new_gerentes" RENAME TO "gerentes";
CREATE UNIQUE INDEX "gerentes_cpf_key" ON "gerentes"("cpf");
CREATE UNIQUE INDEX "gerentes_login_key" ON "gerentes"("login");
CREATE UNIQUE INDEX "gerentes_email_key" ON "gerentes"("email");
CREATE TABLE "new_postos" (
    "idPosto" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imgBg" TEXT,
    "gerenteId" TEXT NOT NULL,
    CONSTRAINT "postos_gerenteId_fkey" FOREIGN KEY ("gerenteId") REFERENCES "gerentes" ("idGerente") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_postos" ("cnpj", "endereco", "idPosto", "imgBg", "nome") SELECT "cnpj", "endereco", "idPosto", "imgBg", "nome" FROM "postos";
DROP TABLE "postos";
ALTER TABLE "new_postos" RENAME TO "postos";
CREATE UNIQUE INDEX "postos_cnpj_key" ON "postos"("cnpj");
CREATE UNIQUE INDEX "postos_gerenteId_key" ON "postos"("gerenteId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
