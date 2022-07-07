import { prisma } from '../utils/prisma-client';

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
  }
};
