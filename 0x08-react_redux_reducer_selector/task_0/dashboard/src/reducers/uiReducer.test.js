// uiReducer.test.js

import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

/**
 * Unit tests for the UI reducer.
 */
describe('uiReducer', () => {
    /**
     * Test that the reducer returns the initial state when no state or action is provided.
     */
    it('should return the initial state', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        expect(uiReducer(undefined, {})).toEqual(initialState);
    });

    /**
     * Test that the reducer does not change the state for an unknown action.
     */
    it('should not change state for unknown action', () => {
        const state = {
            isNotificationDrawerVisible: true,
            isUserLoggedIn: true,
            user: { name: 'John Doe' }
        };
        expect(uiReducer(state, { type: 'UNKNOWN_ACTION' })).toEqual(state);
    });

    /**
     * Test that the reducer handles the DISPLAY_NOTIFICATION_DRAWER action correctly.
     */
    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const state = {
            isNotificationDrawerVisible: false
        };
        const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
        const expectedState = {
            isNotificationDrawerVisible: true
        };
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    /**
     * Test that the reducer handles the HIDE_NOTIFICATION_DRAWER action correctly.
     */
    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        const state = {
            isNotificationDrawerVisible: true
        };
        const action = { type: actionTypes.HIDE_NOTIFICATION_DRAWER };
        const expectedState = {
            isNotificationDrawerVisible: false
        };
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    /**
     * Test that the reducer handles the LOGIN_SUCCESS action correctly.
     */
    it('should handle LOGIN_SUCCESS', () => {
        const state = {
            isUserLoggedIn: false
        };
        const action = { type: actionTypes.LOGIN_SUCCESS };
        const expectedState = {
            isUserLoggedIn: true
        };
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    /**
     * Test that the reducer handles the LOGIN_FAILURE action correctly.
     */
    it('should handle LOGIN_FAILURE', () => {
        const state = {
            isUserLoggedIn: true
        };
        const action = { type: actionTypes.LOGIN_FAILURE };
        const expectedState = {
            isUserLoggedIn: false
        };
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    /**
     * Test that the reducer handles the LOGOUT action correctly.
     */
    it('should handle LOGOUT', () => {
        const state = {
            isUserLoggedIn: true
        };
        const action = { type: actionTypes.LOGOUT };
        const expectedState = {
            isUserLoggedIn: false
        };
        expect(uiReducer(state, action)).toEqual(expectedState);
    });
});