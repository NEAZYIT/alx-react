import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Maps the Redux state to the props of the component.
 *
 * @param {Object} state - The Redux state object.
 * @returns {Object} - An object containing the props derived from the state.
 */
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.ui.isLoggedIn,
        displayDrawer: state.ui.isNotificationDrawerVisible
    };
};

/**
 * Represents the main App component.
 */
class App extends Component {
    /**
     * Render method of the App component.
     * 
     * @returns {JSX.Element} - The JSX for the component.
     */
    render() {
        const { isLoggedIn, displayDrawer } = this.props;

        return (
            <div>
                {/* Your component JSX here */}
                {isLoggedIn && <p>User is logged in</p>}
                {displayDrawer && <p>Notification Drawer is visible</p>}
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);