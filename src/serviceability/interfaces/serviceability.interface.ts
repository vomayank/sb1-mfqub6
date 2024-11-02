export interface IServiceabilityRule {
  evaluate(pincode: string, weight: number): Promise<boolean>;
}

export interface IServiceabilityZone {
  pincodePattern: string;
  maxWeight: number;
  isActive: boolean;
}

export interface IServiceabilityService {
  checkServiceability(pincode: string, weight: number): Promise<boolean>;
  addRule(rule: IServiceabilityRule): void;
}