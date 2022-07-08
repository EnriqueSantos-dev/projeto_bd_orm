/*
  Warnings:

  - You are about to drop the column `token` on the `gerentes` table. All the data in the column will be lost.
  - Added the required column `email` to the `gerentes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_gerentes" (
    "idGerente" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "postoIdPosto" TEXT
);
INSERT INTO "new_gerentes" ("cpf", "idGerente", "login", "nome", "postoIdPosto", "senha") SELECT "cpf", "idGerente", "login", "nome", "postoIdPosto", "senha" FROM "gerentes";
DROP TABLE "gerentes";
ALTER TABLE "new_gerentes" RENAME TO "gerentes";
CREATE UNIQUE INDEX "gerentes_cpf_key" ON "gerentes"("cpf");
CREATE UNIQUE INDEX "gerentes_login_key" ON "gerentes"("login");
CREATE UNIQUE INDEX "gerentes_email_key" ON "gerentes"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
