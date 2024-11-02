import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { IBooking, IBookingService } from './interfaces/booking.interface';

@Injectable()
export class BookingService implements IBookingService {
  private bookings: Map<string, IBooking> = new Map();

  async createBooking(createBookingDto: CreateBookingDto): Promise<IBooking> {
    const booking: IBooking = {
      id: `booking-${Date.now()}`,
      ...createBookingDto,
      status: 'CREATED',
      createdAt: new Date(),
    };
    
    this.bookings.set(booking.id, booking);
    return booking;
  }

  async getBooking(id: string): Promise<IBooking> {
    const booking = this.bookings.get(id);
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }
}