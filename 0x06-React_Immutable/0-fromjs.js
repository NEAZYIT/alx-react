// Import Immutable.js
const { fromJS } = require('immutable');

// Implement the getImmutableObject function
function getImmutableObject(object) {
    return fromJS(object);
}

// Export the function if needed
module.exports = getImmutableObject;