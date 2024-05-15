import { createSelector } from 'reselect';

// Assuming these are the relevant parts of your state structure
const getNotifications = (state) => state.notifications;
const getFilter = (state) => state.filter;

/**
 * Selector to get unread notifications filtered by type.
 * This selector is created using createSelector from the reselect library.
 * It takes an array of input selectors and a function to transform the inputs into the final output.
 * In this case, the input selectors are getNotifications and getFilter, and the transformation function filters the notifications based on read status and type.
 */
const getUnreadNotificationsByType = createSelector(
    [getNotifications, getFilter], // Input selectors
    (notifications, filter) => { // Transformation function
        // Filter notifications based on read status and type
        return notifications.filter(notification => {
            if (!notification.isRead) {
                if (filter === 'default') {
                    return true;
                } else if (filter === 'urgent' && notification.type === 'urgent') {
                    return true;
                }
            }
            return false;
        });
    }
);

// Export the getUnreadNotificationsByType selector
export { getUnreadNotificationsByType }