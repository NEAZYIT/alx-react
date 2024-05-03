import notificationsData from '../../../notifications.json';

/**
 * Retrieves all notifications for a given user.
 * @param {string} userId - The ID of the user.
 * @returns {Array<string>} - An array of notification contexts.
 */
export function getAllNotificationsByUser(userId) {
    return notificationsData.filter(notification => notification.author.id === userId)
        .map(notification => notification.context);
}