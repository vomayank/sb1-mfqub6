import { Injectable } from '@nestjs/common';
import { IServiceabilityRule } from './interfaces/serviceability.interface';

@Injectable()
export class ServiceabilityService {
  private rules: IServiceabilityRule[] = [];

  addRule(rule: IServiceabilityRule) {
    this.rules.push(rule);
  }

  async checkServiceability(pincode: string, weight: number): Promise<boolean> {
    for (const rule of this.rules) {
      const isServiceable = await rule.evaluate(pincode, weight);
      if (!isServiceable) {
        return false;
      }
    }
    return true;
  }
}