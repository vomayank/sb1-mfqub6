import { IChannelAdapter } from '../channel.interface';
export declare class WooCommerceAdapter implements IChannelAdapter {
    fetchOrders(): Promise<any[]>;
    updateOrderStatus(orderId: string, status: string): Promise<void>;
}
