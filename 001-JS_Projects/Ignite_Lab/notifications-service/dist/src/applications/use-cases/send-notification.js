"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendNotification = void 0;
const notifications_1 = require("../entities/notifications");
const content_1 = require("../entities/content");
const notification_repository_1 = require("../repositories/notification-repository");
const common_1 = require("@nestjs/common");
let SendNotification = class SendNotification {
    constructor(notificationsRepository) {
        this.notificationsRepository = notificationsRepository;
    }
    async execute(request) {
        const { recipientId, content, category } = request;
        const notification = new notifications_1.Notification({
            recipientId,
            content: new content_1.Content(content),
            category,
        });
        await this.notificationsRepository.create(notification);
        return {
            notification,
        };
    }
};
SendNotification = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_repository_1.NotificationsRepository])
], SendNotification);
exports.SendNotification = SendNotification;
//# sourceMappingURL=send-notification.js.map