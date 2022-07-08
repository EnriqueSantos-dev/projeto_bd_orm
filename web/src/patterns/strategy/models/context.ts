import { StrategyClient } from '../Interfaces/Strategy';

export class ContextPayment {
  private strategy: StrategyClient | null = null;
  constructor() {}

  public setStrategy = (strategy: StrategyClient): void => {
    this.strategy = strategy;
  };

  public executeStrategy = (value: number): number => {
    if (this.strategy) {
      return Number(this.strategy.paymentStrategy(value));
    }
    throw new Error('Set strategy is necessary');
  };
}
