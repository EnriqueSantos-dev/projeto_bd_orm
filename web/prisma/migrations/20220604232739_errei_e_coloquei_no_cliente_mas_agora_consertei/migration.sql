/*
  Warnings:

  - You are about to drop the column `token` on the `cliente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "gerente" ADD COLUMN "token" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cliente" (
    "idCliente" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_cliente" ("cpf", "idCliente", "nome") SELECT "cpf", "idCliente", "nome" FROM "cliente";
DROP TABLE "cliente";
ALTER TABLE "new_cliente" RENAME TO "cliente";
CREATE UNIQUE INDEX "cliente_cpf_key" ON "cliente"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
