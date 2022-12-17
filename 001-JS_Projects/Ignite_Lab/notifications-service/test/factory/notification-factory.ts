import { Content } from '@applications/entities/content';
import {
  Notification,
  NotificationProps,
} from '@applications/entities/notifications';

type Override = Partial<NotificationProps>;

export function makeNotificaiton(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
