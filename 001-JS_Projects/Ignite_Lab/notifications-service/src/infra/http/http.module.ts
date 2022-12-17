import { CancelNotification } from '@applications/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@applications/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@applications/use-cases/get-recipient-notifications';
import { ReadNotification } from '@applications/use-cases/read-notification';
import { UnreadNotification } from '@applications/use-cases/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/applications/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
