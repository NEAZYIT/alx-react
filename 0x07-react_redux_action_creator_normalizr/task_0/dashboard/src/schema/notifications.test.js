// Import the function we want to test from the notifications.js file
import { getAllNotificationsByUser } from "./notifications";

// Start the test suite for the getAllNotificationsByUser function
describe('getAllNotificationsByUser', () => {
    // Describe the specific test case we want to run
    it('should return correct notifications for a given user id', () => {
        // Define the user id for which we want to retrieve notifications
        const userId = '5debd764a7c57c7839d722e9';
        // Define the expected notifications that should be returned for the user id
        const expectedNotifications = [
            {
                guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
                isRead: true,
                type: 'urgent',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            },
            {
                guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
                isRead: false,
                type: 'urgent',
                value: 'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed'
            }
        ];

        // Call the getAllNotificationsByUser function with the specified userId
        const result = getAllNotificationsByUser(userId);

        // Expect that the result (notifications returned) contains all of the expected notifications
        expect(result).toEqual(expect.arrayContaining(expectedNotifications));
    });
});