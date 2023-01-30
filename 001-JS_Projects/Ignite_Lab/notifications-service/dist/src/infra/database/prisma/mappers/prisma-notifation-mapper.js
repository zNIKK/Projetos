"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationsMapper = void 0;
const notifications_1 = require("../../../../applications/entities/notifications");
const content_1 = require("../../../../applications/entities/content");
class PrismaNotificationsMapper {
    static toPrisma(notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        };
    }
    static toDomain(raw) {
        return new notifications_1.Notification({
            category: raw.category,
            content: new content_1.Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.createdAt,
        }, raw.id);
    }
}
exports.PrismaNotificationsMapper = PrismaNotificationsMapper;
//# sourceMappingURL=prisma-notifation-mapper.js.map