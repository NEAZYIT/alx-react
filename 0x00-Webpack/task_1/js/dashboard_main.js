import $ from 'jquery';
import _ from 'lodash';

let count = 0;

$(document).ready(function () {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    $('#start').on('click', _.debounce(function () {
        updateCounter();
    }, 1000));
});

function updateCounter() {
    count++;
    $('#count').text(count + ' clicks on the button');
}