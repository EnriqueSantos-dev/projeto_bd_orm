type typeClient = 'ENTERPRISE' | 'PERSON';

export interface IClient {
  name: string;
  cpf: string;
  type: typeClient;
  valueSupply: number;
  postoId: string;
}
