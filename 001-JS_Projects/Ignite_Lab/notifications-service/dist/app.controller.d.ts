import { CreateNotificationBody } from './infra/create-notification-body';
import { PrismaService } from './infra/prisma.service';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").PrismaPromise<import(".prisma/client").Notification[]>;
    create(body: CreateNotificationBody): Promise<void>;
}
