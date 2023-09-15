
// Declare targetNumber as a global variable
var targetNumber = 7; // You can set an initial value
// Initialize numBooks from localStorage (if it exists)
var numBooks = parseInt(localStorage.getItem('numBooks')) || 0;


//initialize an empty reading list array
const readingList = [];

// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    header.addEventListener('click', function () {
        alert('Header clicked!');
        console.log("header is clicked");

    });

});


function updateTargetNumber(change) {
    const targetNumberElement = document.getElementById('target-number');
    targetNumber += change; // Update the target number
    targetNumberElement.textContent = targetNumber; // Update the displayed target number
}

function updateNumBooks(change) {
    const numBooksElement = document.getElementById('num-books');
    numBooks += change; // Update the target number
    numBooksElement.textContent = numBooks; // Update the displayed target number
}






