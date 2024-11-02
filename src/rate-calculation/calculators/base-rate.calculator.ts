import { Injectable } from '@nestjs/common';
import { IRateCalculator, IRateCalculation } from '../interfaces/rate-calculation.interface';

@Injectable()
export class BaseRateCalculator implements IRateCalculator {
  private readonly BASE_RATE = 50;
  private readonly WEIGHT_MULTIPLIER = 10;
  private readonly DISTANCE_MULTIPLIER = 5;

  calculateRate(weight: number, distance: number): IRateCalculation {
    const weightCharge = weight * this.WEIGHT_MULTIPLIER;
    const distanceCharge = distance * this.DISTANCE_MULTIPLIER;
    const totalRate = this.BASE_RATE + weightCharge + distanceCharge;

    return {
      totalRate,
      breakdown: {
        baseRate: this.BASE_RATE,
        weightCharge,
        distanceCharge,
      },
    };
  }
}