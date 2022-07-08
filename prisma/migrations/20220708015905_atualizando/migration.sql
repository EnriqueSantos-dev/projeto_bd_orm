/*
  Warnings:

  - The primary key for the `postos_abastecem_clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_postos_abastecem_clientes" (
    "postoId" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL,

    PRIMARY KEY ("postoId", "clienteId", "data"),
    CONSTRAINT "postos_abastecem_clientes_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos" ("idPosto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "postos_abastecem_clientes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_postos_abastecem_clientes" ("clienteId", "data", "postoId", "valor") SELECT "clienteId", "data", "postoId", "valor" FROM "postos_abastecem_clientes";
DROP TABLE "postos_abastecem_clientes";
ALTER TABLE "new_postos_abastecem_clientes" RENAME TO "postos_abastecem_clientes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
