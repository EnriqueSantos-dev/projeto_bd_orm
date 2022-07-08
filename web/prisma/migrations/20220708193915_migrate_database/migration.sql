-- CreateTable
CREATE TABLE "postos" (
    "idPosto" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imgBg" TEXT
);

-- CreateTable
CREATE TABLE "tipos_de_combustiveis" (
    "idTipo" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "postoIdPosto" TEXT,
    CONSTRAINT "tipos_de_combustiveis_postoIdPosto_fkey" FOREIGN KEY ("postoIdPosto") REFERENCES "postos" ("idPosto") ON DELETE SET NULL ON UPDATE CASCADE
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

    PRIMARY KEY ("postoId", "clienteId", "data"),
    CONSTRAINT "postos_abastecem_clientes_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos" ("idPosto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "postos_abastecem_clientes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "postos_cnpj_key" ON "postos"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");
