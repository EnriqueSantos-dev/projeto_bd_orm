import { Client } from './ModelClient';
import { Gerente } from './ModelGerente';
import { TypeFuels } from './TypeFuel';

export class Posto {
  id: string;
  cnpj: string;
  name: string = '';
  address: string = '';
  dataImg?: string;
  boss: Client;
  typeFuels: TypeFuels[] = [];

  constructor(
    id: string,
    name: string,
    cnpj: string,
    address: string,
    dataImg: string,
    boss: Gerente
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.boss = boss;
    this.cnpj = cnpj;
    this.dataImg = dataImg;
  }

  async updateInfosBusiness(): Promise<Posto | null> {
    return null;
  }

  async updateUniqueFuel() {}
  async updatePhotoPosto() {}
}
