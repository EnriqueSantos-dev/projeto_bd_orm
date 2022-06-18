import { Client } from './ModelClient';

export class User extends Client {
  pickGasStation: string = '';
  pickFuel: string = '';
  valueSupply: number = 0;

  setGasStation = (id: string) => {
    this.pickGasStation = id;
  };
  setFuel = (id: string) => {
    this.pickFuel = id;
  };
  setValueSupply = (id: number) => {
    this.valueSupply = id;
  };
  setPersonalInfos = (name: string, cpf: string) => {
    this.name = name;
    this.cpf = cpf;
  };

  getAll = async () => {
    let resp = await fetch('https://jsonplaceholder.typicode.com/albums');
    let data = await resp.json();
    return data;
  };

  payment = async (): Promise<void> => {
    let resp = await fetch('htpp://localhost:3000', {
      method: 'POST',
      body: JSON.stringify({
        idPosto: this.pickGasStation,
        cpf: this.cpf,
        valueSupply: this.valueSupply,
        typeFuel: this.pickFuel,
      }),
    });
    let data = await resp.json();
    return data;
  };
}
