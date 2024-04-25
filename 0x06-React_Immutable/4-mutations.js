import { Map } from 'immutable';

// Create the initial Immutable Map
const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Modify the values for index 2 and index 4 using setIn method
const map2 = map
    .setIn([2], 'Benjamin')
    .setIn([4], 'Olivia');

export { map, map2 };