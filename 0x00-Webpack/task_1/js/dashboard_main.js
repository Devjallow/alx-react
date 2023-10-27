import $ from 'jquery';
import _ from 'lodash';

// Create and append elements
$(document).ready(function () {
  // Create and append paragraphs and button
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p');

  // Initialize the count
  let count = 0;

  // Update the count and display it when the button is clicked
  function updateCounter() {
    count++;
    $('#count').text(count + ' clicks on the button');
  }

  // Bind the debounce function to the click event on the button
  const debouncedUpdateCounter = _.debounce(updateCounter, 500);
  $('#startButton').on('click', debouncedUpdateCounter); // Adjust the debounce delay as needed
});

