import { prisma, PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
const main = async () => {
  await prismaClient.cliente.deleteMany({});
  await prismaClient.posto.deleteMany({});

  await prismaClient.posto.create({
    data: {
      nome: 'Posto test',
      cnpj: '100010030-10',
      endereco: 'rua test'
    }
  });

  await prismaClient.cliente.create({
    data: {
      nome: 'enrique',
      cpf: '133000202'
    }
  });
};

main();
