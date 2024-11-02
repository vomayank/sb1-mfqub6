import { IServiceabilityRule } from './interfaces/serviceability.interface';
export declare class ServiceabilityService {
    private rules;
    addRule(rule: IServiceabilityRule): void;
    checkServiceability(pincode: string, weight: number): Promise<boolean>;
}
