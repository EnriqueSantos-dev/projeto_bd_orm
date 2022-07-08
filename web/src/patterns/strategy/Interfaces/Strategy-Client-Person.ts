import { StrategyClient } from './Strategy';

export class ClientPerson implements StrategyClient {
  private PERCENT_PERSON: number = 1;

  paymentStrategy = (value: number) => {
    return (this.PERCENT_PERSON * value).toFixed(2);
  };
}
