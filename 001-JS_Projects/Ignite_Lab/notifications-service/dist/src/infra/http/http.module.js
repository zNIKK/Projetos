"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const cancel_notification_1 = require("../../applications/use-cases/cancel-notification");
const count_recipient_notifications_1 = require("../../applications/use-cases/count-recipient-notifications");
const get_recipient_notifications_1 = require("../../applications/use-cases/get-recipient-notifications");
const read_notification_1 = require("../../applications/use-cases/read-notification");
const unread_notification_1 = require("../../applications/use-cases/unread-notification");
const common_1 = require("@nestjs/common");
const send_notification_1 = require("../../applications/use-cases/send-notification");
const database_module_1 = require("../database/database.module");
const notifications_controller_1 = require("./controllers/notifications.controller");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [notifications_controller_1.NotificationsController],
        providers: [
            send_notification_1.SendNotification,
            cancel_notification_1.CancelNotification,
            count_recipient_notifications_1.CountRecipientNotifications,
            get_recipient_notifications_1.GetRecipientNotifications,
            read_notification_1.ReadNotification,
            unread_notification_1.UnreadNotification,
        ],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map