import { Posto } from './ModelPosto';

type updateFuelType = {
  id: string;
  newvalue: string;
  name: string;
};

export class TypeFuels {
  type: string | null = null;
  value: number | null = null;
  postos: Posto[] = [];

  async updateFuel(idPosto: string, values: updateFuelType) {}
}
