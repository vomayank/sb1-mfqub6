export interface ICarrierAdapter {
  createShipment(shipmentDetails: any): Promise<string>;
  trackShipment(trackingNumber: string): Promise<any>;
  cancelShipment?(trackingNumber: string): Promise<void>;
}

export interface IShipmentDetails {
  origin: {
    address: string;
    pincode: string;
  };
  destination: {
    address: string;
    pincode: string;
  };
  weight: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
}