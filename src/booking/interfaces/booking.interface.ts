export interface IBooking {
  id: string;
  customerName: string;
  pickupAddress: string;
  deliveryAddress: string;
  weight: number;
  status: string;
  createdAt: Date;
}

export interface IBookingService {
  createBooking(booking: Partial<IBooking>): Promise<IBooking>;
  getBooking(id: string): Promise<IBooking>;
}