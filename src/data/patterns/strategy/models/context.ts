import { Client } from '../I-strategy';

export class ContextPayment {
  private strategy: Client | null = null;
  constructor() {}

  public setStrategy = (client: Client): void => {
    this.strategy = client;
  };

  public executeStrategy = (value: number): number => {
    if (this.strategy) {
      return this.strategy.paymentStrategy(value);
    }
    throw new Error('Set strategy is necessary');
  };
}
