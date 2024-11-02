export interface INotificationStrategy {
    send(recipient: string, message: string): Promise<void>;
}
export interface INotificationOptions {
    type: 'email' | 'sms';
    template?: string;
    variables?: Record<string, string>;
}
export interface INotificationService {
    notify(recipient: string, message: string, options: INotificationOptions): Promise<void>;
}
