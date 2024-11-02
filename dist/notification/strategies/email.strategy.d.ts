import { INotificationStrategy } from '../interfaces/notification.interface';
export declare class EmailStrategy implements INotificationStrategy {
    send(recipient: string, message: string): Promise<void>;
}
