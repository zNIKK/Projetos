import { Notification } from '@applications/entities/notifications';
import { NotificationsRepository } from '@applications/repositories/notification-repository';
import { PrismaService } from '../prisma.service';
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prisma;
    PrismaNotificationMapper: any;
    constructor(prisma: PrismaService);
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    findById(notificationId: string): Promise<Notification | null>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    create(notification: Notification): Promise<void>;
    save(notification: Notification): Promise<void>;
}
