import { Injectable } from '@nestjs/common';
import { ICarrierAdapter } from './interfaces/carrier.interface';

@Injectable()
export class CarrierService {
  private carriers: Map<string, ICarrierAdapter> = new Map();

  registerCarrier(name: string, adapter: ICarrierAdapter) {
    this.carriers.set(name, adapter);
  }

  async createShipment(
    carrierName: string,
    shipmentDetails: any
  ): Promise<string> {
    const carrier = this.carriers.get(carrierName);
    if (!carrier) {
      throw new Error(`Carrier ${carrierName} not found`);
    }
    return carrier.createShipment(shipmentDetails);
  }

  async trackShipment(
    carrierName: string,
    trackingNumber: string
  ): Promise<any> {
    const carrier = this.carriers.get(carrierName);
    if (!carrier) {
      throw new Error(`Carrier ${carrierName} not found`);
    }
    return carrier.trackShipment(trackingNumber);
  }
}