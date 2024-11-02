export interface IChannelAdapter {
  fetchOrders(): Promise<any[]>;
  updateOrderStatus(orderId: string, status: string): Promise<void>;
}

export interface IChannelService {
  importOrders(channel: string): Promise<void>;
  syncOrderStatus(channel: string, orderId: string, status: string): Promise<void>;
}