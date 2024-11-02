import { Injectable } from '@nestjs/common';
import { INotificationStrategy } from '../interfaces/notification.interface';

@Injectable()
export class EmailStrategy implements INotificationStrategy {
  async send(recipient: string, message: string): Promise<void> {
    // Implementation for sending emails
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}