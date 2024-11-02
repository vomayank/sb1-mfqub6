import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('bookings')
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiResponse({ 
    status: 201, 
    description: 'The booking has been successfully created.',
    type: CreateBookingDto 
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a booking by ID' })
  @ApiParam({ name: 'id', description: 'Booking ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns the booking information.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        status: { type: 'string' }
      }
    }
  })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  async getBooking(@Param('id') id: string) {
    return this.bookingService.getBooking(id);
  }
}