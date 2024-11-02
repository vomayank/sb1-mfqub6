import { Injectable } from '@nestjs/common';
import { BaseRateCalculator } from '../rate-calculation/calculators/base-rate.calculator';

@Injectable()
export class DeliveryTimeService {
  private readonly AVERAGE_SPEED = 40; // km/h
  private readonly PROCESSING_TIME = 24; // hours

  constructor(private readonly rateCalculator: BaseRateCalculator) {}

  calculateEstimatedDeliveryTime(distance: number, serviceType: string): number {
    const transitTime = distance / this.AVERAGE_SPEED;
    const processingTime = this.PROCESSING_TIME;
    
    let estimatedTime = transitTime + processingTime;
    
    if (serviceType === 'express') {
      estimatedTime *= 0.6; // 40% faster for express delivery
    }
    
    return Math.ceil(estimatedTime);
  }
}