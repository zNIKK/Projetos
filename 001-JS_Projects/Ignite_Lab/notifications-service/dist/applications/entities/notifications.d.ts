import { Content } from './notifications-content';
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}
export declare class Notifications {
    private props;
    constructor(props: NotificationProps);
    set recipientId(recipientId: string);
    get recipientId(): string;
    set content(content: string);
    get content(): string;
    set category(category: string);
    get category(): string;
    set readAt(readAt: Date | null | undefined);
    get readAt(): Date | null | undefined;
    get createdAt(): Date;
}
