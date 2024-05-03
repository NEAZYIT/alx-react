import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

/**
 * Action creator for the login action.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {object} - The login action object.
 */
export function login(email, password) {
    return { type: LOGIN, user: { email, password } };
}

export function logout() {
    return { type: LOGOUT };
}

export function displayNotificationDrawer() {
    return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer() {
    return { type: HIDE_NOTIFICATION_DRAWER };
}