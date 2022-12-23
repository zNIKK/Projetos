"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = void 0;
class Notifications {
    constructor(props) {
        this.props = props;
    }
    set recipientId(recipientId) {
        this.props.recipientId = recipientId;
    }
    get recipientId() {
        return this.props.recipientId;
    }
    set content(content) {
        this.props.content = content;
    }
    get content() {
        return this.props.content;
    }
    set category(category) {
        this.props.category = category;
    }
    get category() {
        return this.props.category;
    }
    set readAt(readAt) {
        this.props.readAt = readAt;
    }
    get readAt() {
        return this.props.readAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
exports.Notifications = Notifications;
//# sourceMappingURL=notifications.js.map