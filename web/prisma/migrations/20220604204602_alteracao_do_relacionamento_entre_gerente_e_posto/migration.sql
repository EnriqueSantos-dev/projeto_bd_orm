/*
  Warnings:

  - You are about to drop the column `gerenteId` on the `posto` table. All the data in the column will be lost.
  - Added the required column `gerenteIdGerente` to the `posto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gerente" ADD COLUMN "postoIdPosto" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_posto" (
    "idPosto" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imgBg" TEXT,
    "gerenteIdGerente" TEXT NOT NULL,
    CONSTRAINT "posto_gerenteIdGerente_fkey" FOREIGN KEY ("gerenteIdGerente") REFERENCES "gerente" ("idGerente") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_posto" ("cnpj", "endereco", "idPosto", "imgBg", "nome") SELECT "cnpj", "endereco", "idPosto", "imgBg", "nome" FROM "posto";
DROP TABLE "posto";
ALTER TABLE "new_posto" RENAME TO "posto";
CREATE UNIQUE INDEX "posto_cnpj_key" ON "posto"("cnpj");
CREATE UNIQUE INDEX "posto_gerenteIdGerente_key" ON "posto"("gerenteIdGerente");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
