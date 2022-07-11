import { CreateFuel } from '../types/createFuel';
import { dataPostoCreate } from '../types/dataPostoCreate';
import { prisma, PrismaErros } from '../utils/prisma-client';

export const PostoService = {
  findAll: async () => {
    try {
      const data = await prisma.posto.findMany();
      return data;
    } catch (error) {}
  },
  getFuels: async (id: string) => {
    try {
      const data = await prisma.posto.findUnique({
        include: {
          tipos_combustiveis: {
            select: {
              idTipo: true,
              nome: true,
              valor: true
            }
          }
        },
        where: {
          idPosto: id
        }
      });
      return data;
    } catch (error) {}
  },
  createFuel: async (dataCreate: CreateFuel) => {
    try {
      const data = await prisma.tipo_combustivel.create({
        select: {
          idTipo: true,
          nome: true
        },
        data: {
          nome: dataCreate.nameFuel,
          valor: dataCreate.valueFuel,
          postoIdPosto: dataCreate.idPosto
        }
      });
      return data;
    } catch (e) {
      throw new Error('Não foi possível adicionar o combustível');
    }
  },
  create: async (dataPosto: dataPostoCreate) => {
    try {
      const data = await prisma.posto.create({
        data: {
          nome: dataPosto.name,
          cnpj: dataPosto.cnpj,
          endereco: dataPosto.address,
          imgBg: dataPosto?.imgBg
        }
      });

      return data;
    } catch (error) {
      if (error instanceof PrismaErros) {
        if (error.code === 'P2002')
          throw new Error('Já existe um posto com esse CNPJ');

        return;
      }
      throw new Error(
        'Por algum motivo desconhecido a operação não foi concluída'
      );
    }
  },
  getSalesClient: async (cpf: string, postoId: string) => {
    try {
      const data = await prisma.posto_Abastecer_Cliente.findMany({
        select: {
          postoId: true,
          valor: true,
          data: true
        },
        where: {
          postoId,
          cliente: {
            cpf
          }
        }
      });

      return { data };
    } catch (error) {
      if (error instanceof PrismaErros) {
        if (error.code === 'P2001') return { error: 'cliente não encontrado' };
      }
      return { error: error };
    }
  }
};
