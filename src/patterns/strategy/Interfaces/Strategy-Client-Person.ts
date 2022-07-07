import { StrategyClient } from './Strategy';

export class ClientPerson implements StrategyClient {
  private readonly PERCENT_PERSON: number = 1;

  paymentStrategy = (value: number) => {
    return this.PERCENT_PERSON * value;
  };
}
