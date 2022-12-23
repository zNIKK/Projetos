import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from '@applications/use-cases/send-notification';
import { CancelNotification } from '@applications/use-cases/cancel-notification';
import { ReadNotification } from '@applications/use-cases/read-notification';
import { UnreadNotification } from '@applications/use-cases/unread-notification';
import { GetRecipientNotifications } from '@applications/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from '@applications/use-cases/count-recipient-notifications';
export declare class NotificationsController {
    private sendNotification;
    private cancelNotification;
    private readNotification;
    private unreadNotification;
    private countRecipientNotification;
    private getRecipientNotification;
    constructor(sendNotification: SendNotification, cancelNotification: CancelNotification, readNotification: ReadNotification, unreadNotification: UnreadNotification, countRecipientNotification: CountRecipientNotifications, getRecipientNotification: GetRecipientNotifications);
    cancel(id: string): Promise<void>;
    countFromRecipient(recipientId: string): Promise<{
        count: number;
    }>;
    getFromRecipient(recipientId: string): Promise<{
        notifications: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
            readAt: Date | null | undefined;
            createdAt: Date;
        }[];
    }>;
    read(id: string): Promise<void>;
    unread(id: string): Promise<void>;
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
            readAt: Date | null | undefined;
            createdAt: Date;
        };
    }>;
}
