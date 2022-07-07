import { StrategyClient } from './Strategy';

export class ClientEnterprise implements StrategyClient {
  private readonly PERCENT_ENTERPRISE: number = 0.9;

  paymentStrategy = (value: number) => {
    return this.PERCENT_ENTERPRISE * value;
  };
}
