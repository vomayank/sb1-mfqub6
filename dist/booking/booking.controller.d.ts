import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    createBooking(createBookingDto: CreateBookingDto): Promise<import("./interfaces/booking.interface").IBooking>;
    getBooking(id: string): Promise<import("./interfaces/booking.interface").IBooking>;
}
