export interface Client {
  paymentStrategy: (value: number) => number;
}

export class ClientEnterprise implements Client {
  private readonly PERCENT_ENTERPRISE: number = 0.9;

  paymentStrategy = (value: number) => {
    return this.PERCENT_ENTERPRISE * value;
  };
}
export class ClientPerson implements Client {
  private readonly PERCENT_PERSON: number = 1;

  paymentStrategy = (value: number) => {
    return this.PERCENT_PERSON * value;
  };
}
