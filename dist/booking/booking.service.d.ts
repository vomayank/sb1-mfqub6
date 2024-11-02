import { CreateBookingDto } from './dto/create-booking.dto';
import { IBooking, IBookingService } from './interfaces/booking.interface';
export declare class BookingService implements IBookingService {
    private bookings;
    createBooking(createBookingDto: CreateBookingDto): Promise<IBooking>;
    getBooking(id: string): Promise<IBooking>;
}
