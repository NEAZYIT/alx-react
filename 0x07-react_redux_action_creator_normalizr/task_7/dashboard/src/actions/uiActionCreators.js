import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// Import the action types LOGIN_SUCCESS and LOGIN_FAILURE
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

import { bindActionCreators } from 'redux';

export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
});

export const logout = () => ({
    type: LOGOUT
});

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER
});

// Create a function named loginSuccess that returns an action object with the type LOGIN_SUCCESS
export function loginSuccess() {
    return { type: LOGIN_SUCCESS };
}

// Create a function named loginFailure that returns an action object with the type LOGIN_FAILURE
export function loginFailure() {
    return { type: LOGIN_FAILURE };
}

// Create a function named loginRequest
export function loginRequest(email, password) {
    // Dispatch the login action using the loginSuccess action creator
    return dispatch => {
        // Use fetch to make a GET request to /login-success.json
        return fetch('/login-success.json')
            .then(response => {
                // If the response status is 200, dispatch loginSuccess
                if (response.ok) {
                    dispatch(loginSuccess());
                } else {
                    // If the response status is not 200, dispatch loginFailure
                    dispatch(loginFailure());
                }
            })
            .catch(error => {
                // Handle any errors
                console.error('Error:', error);
                dispatch(loginFailure());
            });
    };
}

// Bind action creators to dispatch function
export const boundLogin = (email, password) => dispatch => bindActionCreators(login, dispatch)(email, password);
export const boundLogout = () => dispatch => bindActionCreators(logout, dispatch)();
export const boundDisplayNotificationDrawer = () => dispatch => bindActionCreators(displayNotificationDrawer, dispatch)();
export const boundHideNotificationDrawer = () => dispatch => bindActionCreators(hideNotificationDrawer, dispatch)();