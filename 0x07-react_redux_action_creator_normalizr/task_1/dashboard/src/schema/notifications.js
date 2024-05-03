import { normalize, schema } from 'normalizr';

// Define schema entities
const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

/**
 * Represents a notification entity.
 *
 * @typedef {Object} Notification
 * @property {User} author - The author of the notification.
 * @property {Message} context - The context of the notification.
 */
const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

// Normalize notificationsData
export const normalizedData = normalize(notificationsData, [notification]);

// Export normalized data for testing
export const { entities } = normalizedData;