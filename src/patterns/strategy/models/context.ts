import { StrategyClient } from '../I-strategy';

export class ContextPayment {
  private strategy: StrategyClient | null = null;
  constructor() {}

  public setStrategy = (strategy: StrategyClient): void => {
    this.strategy = strategy;
  };

  public executeStrategy = (value: number): number => {
    if (this.strategy) {
      return this.strategy.paymentStrategy(value);
    }
    throw new Error('Set strategy is necessary');
  };
}
