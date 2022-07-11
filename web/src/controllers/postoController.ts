import { Request, Response } from 'express';
import { IClient } from '../models/ClientModel';
import { PostoService } from '../services/PostoService';

export const all = async (req: Request, res: Response) => {
  const data = await PostoService.findAll();

  return res.json({ data });
};

export const getFuelsPosto = async (req: Request, res: Response) => {
  const params = req.params;
  const data = await PostoService.getFuels(params.id);

  return res.json(data);
};

export const createFuelType = async (req: Request, res: Response) => {
  const params = req.body;

  try {
    const data = await PostoService.createFuel(params);
    return res.status(201).json(data);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

export const createPosto = async (req: Request, res: Response) => {
  const params = req.body;

  try {
    await PostoService.create(params);

    return res.status(201).end();
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

export const getAllSalesUniqueClient = async (req: Request, res: Response) => {
  const client: Omit<IClient, 'valueSupply' | 'type' | 'name'> = req.body;
  req.body;
  try {
    const { data } = await PostoService.getSalesClient(
      client.cpf,
      client.postoId
    );
    const clientResponse = {
      cliente: client.cpf,
      sales: data
    };
    return res.status(200).json(clientResponse);
  } catch (error) {
    return res.status(200).json({ error: error });
  }
};
