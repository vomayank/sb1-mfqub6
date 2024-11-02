import { BaseRateCalculator } from '../rate-calculation/calculators/base-rate.calculator';
export declare class DeliveryTimeService {
    private readonly rateCalculator;
    private readonly AVERAGE_SPEED;
    private readonly PROCESSING_TIME;
    constructor(rateCalculator: BaseRateCalculator);
    calculateEstimatedDeliveryTime(distance: number, serviceType: string): number;
}
