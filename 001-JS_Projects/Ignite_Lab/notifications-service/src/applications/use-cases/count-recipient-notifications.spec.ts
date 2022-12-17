import { Content } from '@applications/entities/content';
import { Notification } from '@applications/entities/notifications';
import { makeNotificaiton } from '@test/factory/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notification', () => {
  it('should be able to count to recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotificaiton({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotificaiton({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotificaiton({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
