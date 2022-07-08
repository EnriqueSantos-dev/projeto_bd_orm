import { Request, Response } from 'express';
import {
  ClientEnterprise,
  ClientPerson
} from '../patterns/strategy/Interfaces';
import { ContextPayment } from '../patterns/strategy/models/context';
import { ClientService } from '../services/ClientService';

export const createClient = async (req: Request, res: Response) => {
  const client = req.body;
  const contextClientPayment = new ContextPayment();

  if (client.type === 'ENTERPRISE') {
    contextClientPayment.setStrategy(new ClientEnterprise());
  }

  if (client.type === 'PERSON') {
    contextClientPayment.setStrategy(new ClientPerson());
  }

  const valueDescontWitchStrategy = contextClientPayment.executeStrategy(
    client.valueSupply
  );

  const newClient = {
    ...client,
    valueSupply: valueDescontWitchStrategy
  };

  const data = await ClientService.create(newClient);

  return res.json(data);
};
