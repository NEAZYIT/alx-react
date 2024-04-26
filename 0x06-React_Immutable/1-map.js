// Import Immutable.js
const { Map } = require('immutable');

// Modify the getImmutableObject function
function getImmutableObject(object) {
    return Map(object);
}

// Export the function if needed
module.exports = getImmutableObject;