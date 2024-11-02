import { Module } from '@nestjs/common';
import { RateCalculationService } from './rate-calculation.service';
import { RateCalculationController } from './rate-calculation.controller';
import { BaseRateCalculator } from './calculators/base-rate.calculator';

@Module({
  providers: [RateCalculationService, BaseRateCalculator],
  controllers: [RateCalculationController],
  exports: [RateCalculationService],
})
export class RateCalculationModule {}