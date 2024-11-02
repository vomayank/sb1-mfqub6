import { IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CalculateRateDto {
  @ApiProperty({
    description: 'Weight of the package in kilograms',
    example: 5.5,
    minimum: 0
  })
  @IsNumber()
  @Min(0)
  weight: number;

  @ApiProperty({
    description: 'Distance in kilometers',
    example: 100,
    minimum: 0
  })
  @IsNumber()
  @Min(0)
  distance: number;
}