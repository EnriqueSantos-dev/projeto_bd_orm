import { PrismaClient, Prisma } from '@prisma/client';

export const prisma = new PrismaClient();
export const PrismaErros = Prisma.PrismaClientKnownRequestError;
