/*
  Warnings:

  - You are about to drop the `Posto_Abastecer_Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posto_Contem_Tipo_combustivel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gerente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Posto_Abastecer_Cliente";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Posto_Contem_Tipo_combustivel";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "cliente";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "gerente";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "posto";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tipo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "postos" (
    "idPosto" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imgBg" TEXT,
    "gerenteIdGerente" TEXT NOT NULL,
    CONSTRAINT "postos_gerenteIdGerente_fkey" FOREIGN KEY ("gerenteIdGerente") REFERENCES "gerentes" ("idGerente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tipos_de_combustiveis" (
    "idTipo" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "postoIdPosto" TEXT NOT NULL,
    CONSTRAINT "tipos_de_combustiveis_postoIdPosto_fkey" FOREIGN KEY ("postoIdPosto") REFERENCES "postos" ("idPosto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "gerentes" (
    "idGerente" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "token" TEXT,
    "postoIdPosto" TEXT
);

-- CreateTable
CREATE TABLE "clientes" (
    "idCliente" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "postos_abastecem_clientes" (
    "postoId" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL,

    PRIMARY KEY ("postoId", "clienteId"),
    CONSTRAINT "postos_abastecem_clientes_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos" ("idPosto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "postos_abastecem_clientes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "postos_cnpj_key" ON "postos"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "postos_gerenteIdGerente_key" ON "postos"("gerenteIdGerente");

-- CreateIndex
CREATE UNIQUE INDEX "tipos_de_combustiveis_nome_key" ON "tipos_de_combustiveis"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "gerentes_cpf_key" ON "gerentes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "gerentes_login_key" ON "gerentes"("login");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");
