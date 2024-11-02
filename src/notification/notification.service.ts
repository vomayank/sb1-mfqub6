import { Injectable } from '@nestjs/common';
import { INotificationStrategy } from './interfaces/notification.interface';

@Injectable()
export class NotificationService {
  private strategies: Map<string, INotificationStrategy> = new Map();

  registerStrategy(type: string, strategy: INotificationStrategy) {
    this.strategies.set(type, strategy);
  }

  async notify(type: string, recipient: string, message: string): Promise<void> {
    const strategy = this.strategies.get(type);
    if (!strategy) {
      throw new Error(`Notification strategy ${type} not found`);
    }
    await strategy.send(recipient, message);
  }
}