import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@applications/entities/notifications';
export declare class PrismaNotificationsMapper {
    static toPrisma(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: Date | null | undefined;
        createdAt: Date;
    };
    static toDomain(raw: RawNotification): Notification;
}
