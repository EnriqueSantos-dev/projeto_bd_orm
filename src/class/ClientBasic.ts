import { Client } from './Client';

export class ClientBasic extends Client {
  pickGasStation: string | null = null;
  pickFuel: string | null = null;
  valueSupply: number | null = null;

  setGasStation = (id: string) => {
    this.pickGasStation = id;
  };
  setFuel = (id: string) => {
    this.pickFuel = id;
  };
  setValueSupply = (id: number) => {
    this.valueSupply = id;
  };

  getAll = () => {
    return {
      name: this.name,
      cpf: this.cpf,
      pickPosto: this.pickGasStation,
      pickFuel: this.pickFuel,
      valueSuplly: this.valueSupply,
    };
  };
}
