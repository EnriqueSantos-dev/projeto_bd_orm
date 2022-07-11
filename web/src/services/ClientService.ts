import { prisma } from '../utils/prisma-client';
import { IClient } from '../models/ClientModel';

export type returnCreate = {
  status?: string;
  create?: boolean;
  error?: unknown;
};

export const ClientService = {
  create: async (client: IClient): Promise<returnCreate> => {
    try {
      const clientExists = await prisma.cliente.findUnique({
        select: { idCliente: true, nome: true },
        where: { cpf: client.cpf }
      });

      if (!clientExists) {
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
        await prisma.posto_Abastecer_Cliente.create({
          data: {
            clienteId: idCliente,
            data: new Date(),
            postoId: client.postoId,
            valor: client.valueSupply
          }
        });
        return { create: true };
      }

      await prisma.posto_Abastecer_Cliente.create({
        data: {
          clienteId: clientExists.idCliente,
          postoId: client.postoId,
          valor: client.valueSupply,
          data: new Date()
        }
      });
      return { status: `cliente ${client.name} atualizado com sucesso` };
    } catch (error) {
      return { error: error };
    }
  }
};
