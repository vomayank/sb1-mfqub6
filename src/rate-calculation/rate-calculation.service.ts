import { Injectable } from '@nestjs/common';
import { CalculateRateDto } from './dto/calculate-rate.dto';
import { IRateCalculation, IRateCalculationService } from './interfaces/rate-calculation.interface';
import { BaseRateCalculator } from './calculators/base-rate.calculator';

@Injectable()
export class RateCalculationService implements IRateCalculationService {
  constructor(private readonly calculator: BaseRateCalculator) {}

  calculateShippingRate(weight: number, distance: number): IRateCalculation {
    return this.calculator.calculateRate(weight, distance);
  }

  calculateRate(calculateRateDto: CalculateRateDto): IRateCalculation {
    const { weight, distance } = calculateRateDto;
    return this.calculateShippingRate(weight, distance);
  }
}