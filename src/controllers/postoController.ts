import { Request, Response } from 'express';
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
