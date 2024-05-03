// uiActionCreators.test.js

// Import necessary dependencies
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

// Create a mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UI Action Creators', () => {
    it('should create an action to login', () => {
        const email = 'test@example.com';
        const password = 'password123';
        const expectedAction = {
            type: LOGIN,
            user: { email, password }
        };
        expect(login(email, password)).toEqual(expectedAction);
    });

    it('should create an action to logout', () => {
        const expectedAction = { type: LOGOUT };
        expect(logout()).toEqual(expectedAction);
    });

    it('should create an action to display notification drawer', () => {
        const expectedAction = { type: DISPLAY_NOTIFICATION_DRAWER };
        expect(displayNotificationDrawer()).toEqual(expectedAction);
    });

    it('should create an action to hide notification drawer', () => {
        const expectedAction = { type: HIDE_NOTIFICATION_DRAWER };
        expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
});

// Write a test suite for the loginRequest action
describe('loginRequest', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispatch LOGIN and LOGIN_SUCCESS actions if API call succeeds', () => {
        // Mock API response for successful login
        fetchMock.getOnce('/login-success.json', { status: 200 });

        const expectedActions = [
            { type: 'LOGIN' },
            { type: LOGIN_SUCCESS }
        ];

        const store = mockStore();

        return store.dispatch(loginRequest('test@example.com', 'password'))
            .then(() => {
                // Verify that the store received the expected actions
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('should dispatch LOGIN and LOGIN_FAILURE actions if API call fails', () => {
        // Mock API response for failed login
        fetchMock.getOnce('/login-success.json', { status: 404 });

        const expectedActions = [
            { type: 'LOGIN' },
            { type: LOGIN_FAILURE }
        ];

        const store = mockStore();

        return store.dispatch(loginRequest('test@example.com', 'password'))
            .then(() => {
                // Verify that the store received the expected actions
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});