import { INotificationStrategy } from './interfaces/notification.interface';
export declare class NotificationService {
    private strategies;
    registerStrategy(type: string, strategy: INotificationStrategy): void;
    notify(type: string, recipient: string, message: string): Promise<void>;
}
