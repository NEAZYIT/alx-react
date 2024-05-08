// uiReducer.js

import * as actionTypes from '../actions/uiActionTypes';

/**
 * The initial state of the UI.
 */
const initialState = {
    /**
     * Indicates whether the notification drawer is visible or not.
     */
    isNotificationDrawerVisible: false,
    /**
     * Indicates whether the user is logged in or not.
     */
    isUserLoggedIn: false,
    /**
     * Stores the user object if the user is logged in.
     */
    user: {}
};

/**
 * The reducer function for managing the UI state.
 *
 * @param {object} state The current state.
 * @param {object} action The action.
 *
 * @returns {object} The next state.
 */
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true
            };
        case actionTypes.HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            };
        case actionTypes.LOGIN_FAILURE:
        case actionTypes.LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false
            };
        default:
            return state;
    }
};

/**
 * Exports the UI reducer as the default export of the module.
 */
export default uiReducer;