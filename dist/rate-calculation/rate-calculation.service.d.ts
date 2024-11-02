import { CalculateRateDto } from './dto/calculate-rate.dto';
import { IRateCalculation, IRateCalculationService } from './interfaces/rate-calculation.interface';
import { BaseRateCalculator } from './calculators/base-rate.calculator';
export declare class RateCalculationService implements IRateCalculationService {
    private readonly calculator;
    constructor(calculator: BaseRateCalculator);
    calculateShippingRate(weight: number, distance: number): IRateCalculation;
    calculateRate(calculateRateDto: CalculateRateDto): IRateCalculation;
}
