-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tipos_de_combustiveis" (
    "idTipo" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "postoIdPosto" TEXT,
    CONSTRAINT "tipos_de_combustiveis_postoIdPosto_fkey" FOREIGN KEY ("postoIdPosto") REFERENCES "postos" ("idPosto") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_tipos_de_combustiveis" ("idTipo", "nome", "postoIdPosto", "valor") SELECT "idTipo", "nome", "postoIdPosto", "valor" FROM "tipos_de_combustiveis";
DROP TABLE "tipos_de_combustiveis";
ALTER TABLE "new_tipos_de_combustiveis" RENAME TO "tipos_de_combustiveis";
CREATE UNIQUE INDEX "tipos_de_combustiveis_nome_key" ON "tipos_de_combustiveis"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
