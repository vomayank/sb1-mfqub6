import { IRateCalculator, IRateCalculation } from '../interfaces/rate-calculation.interface';
export declare class BaseRateCalculator implements IRateCalculator {
    private readonly BASE_RATE;
    private readonly WEIGHT_MULTIPLIER;
    private readonly DISTANCE_MULTIPLIER;
    calculateRate(weight: number, distance: number): IRateCalculation;
}
