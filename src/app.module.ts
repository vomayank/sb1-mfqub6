import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { RateCalculationModule } from './rate-calculation/rate-calculation.module';

@Module({
  imports: [BookingModule, RateCalculationModule],
})
export class AppModule {}