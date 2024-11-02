import { Controller, Post, Body } from '@nestjs/common';
import { RateCalculationService } from './rate-calculation.service';
import { CalculateRateDto } from './dto/calculate-rate.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('rates')
@Controller('rates')
export class RateCalculationController {
  constructor(private readonly rateCalculationService: RateCalculationService) {}

  @Post('calculate')
  @ApiOperation({ summary: 'Calculate shipping rate' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns the calculated rate with breakdown.',
    schema: {
      type: 'object',
      properties: {
        totalRate: { type: 'number' },
        breakdown: {
          type: 'object',
          properties: {
            baseRate: { type: 'number' },
            weightCharge: { type: 'number' },
            distanceCharge: { type: 'number' }
          }
        }
      }
    }
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  calculateRate(@Body() calculateRateDto: CalculateRateDto) {
    return this.rateCalculationService.calculateRate(calculateRateDto);
  }
}