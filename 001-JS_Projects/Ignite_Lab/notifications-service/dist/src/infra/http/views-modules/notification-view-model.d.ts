import { Notification } from '@applications/entities/notifications';
export declare class NotificationViewModel {
    static toHTTP(notification: Notification): {
        id: string;
        content: string;
        category: string;
        recipientId: string;
        readAt: Date | null | undefined;
        createdAt: Date;
    };
}
