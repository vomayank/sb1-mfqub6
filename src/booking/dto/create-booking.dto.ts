import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({
    description: 'Name of the customer',
    example: 'John Doe'
  })
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty({
    description: 'Pickup address for the shipment',
    example: '123 Main St, City'
  })
  @IsString()
  @IsNotEmpty()
  pickupAddress: string;

  @ApiProperty({
    description: 'Delivery address for the shipment',
    example: '456 Oak St, City'
  })
  @IsString()
  @IsNotEmpty()
  deliveryAddress: string;

  @ApiProperty({
    description: 'Weight of the package in kilograms',
    example: 5.5,
    minimum: 0
  })
  @IsNumber()
  weight: number;
}