import { ICarrierAdapter } from './interfaces/carrier.interface';
export declare class CarrierService {
    private carriers;
    registerCarrier(name: string, adapter: ICarrierAdapter): void;
    createShipment(carrierName: string, shipmentDetails: any): Promise<string>;
    trackShipment(carrierName: string, trackingNumber: string): Promise<any>;
}
