export interface StrategyClient {
  paymentStrategy: (value: number) => string;
}
