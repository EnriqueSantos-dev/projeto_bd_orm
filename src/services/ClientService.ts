import { prisma } from '../utils/prisma-client';
import { IClient } from '../models/ClientModel';

export const ClientService = {
  create: async (client: IClient) => {
    try {
      //create client
      const { idCliente } = await prisma.cliente.create({
        select: {
          idCliente: true
        },
        data: {
          nome: client.name,
          cpf: client.cpf
        }
      });

      //relation client/posto
      await prisma.posto_Abastecer_Cliente.create({
        data: {
          clienteId: idCliente,
          data: new Date(),
          postoId: client.postoId,
          valor: client.valueSupply
        }
      });

      return { create: true };
    } catch (error) {
      return error;
    }
  }
};
