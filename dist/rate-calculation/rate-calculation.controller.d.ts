import { RateCalculationService } from './rate-calculation.service';
import { CalculateRateDto } from './dto/calculate-rate.dto';
export declare class RateCalculationController {
    private readonly rateCalculationService;
    constructor(rateCalculationService: RateCalculationService);
    calculateRate(calculateRateDto: CalculateRateDto): import("./interfaces/rate-calculation.interface").IRateCalculation;
}
