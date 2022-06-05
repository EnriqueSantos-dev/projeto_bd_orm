-- CreateTable
CREATE TABLE "posto" (
    "idPosto" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imgBg" TEXT,
    "gerenteId" TEXT NOT NULL,
    CONSTRAINT "posto_gerenteId_fkey" FOREIGN KEY ("gerenteId") REFERENCES "gerente" ("idGerente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tipo" (
    "idTipo" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "gerente" (
    "idGerente" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cliente" (
    "idCliente" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Posto_Contem_Tipo_combustivel" (
    "postoId" TEXT NOT NULL,
    "tipo_combustivelId" TEXT NOT NULL,

    PRIMARY KEY ("postoId", "tipo_combustivelId"),
    CONSTRAINT "Posto_Contem_Tipo_combustivel_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "posto" ("idPosto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Posto_Contem_Tipo_combustivel_tipo_combustivelId_fkey" FOREIGN KEY ("tipo_combustivelId") REFERENCES "tipo" ("idTipo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Posto_Abastecer_Cliente" (
    "postoId" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL,

    PRIMARY KEY ("postoId", "clienteId"),
    CONSTRAINT "Posto_Abastecer_Cliente_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "posto" ("idPosto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Posto_Abastecer_Cliente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente" ("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "posto_cnpj_key" ON "posto"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_nome_key" ON "tipo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "gerente_cpf_key" ON "gerente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "gerente_login_key" ON "gerente"("login");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpf_key" ON "cliente"("cpf");
