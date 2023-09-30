
// Declare targetNumber as a global variable
var targetNumber = parseInt(localStorage.getItem('goal')) || 10; // You can set an initial value
// Initialize numBooks from localStorage (if it exists)
var numBooks = parseInt(localStorage.getItem('numBooks')) || 0;
// localStorage.clear();

//initialize an empty reading list array
const readingList = [];

//initialize an empty TBR list array
const tbrList = [];


function updateTargetNumber(change) {
    const targetNumberElement = document.getElementById('target-number');
    targetNumber += change; // Update the target number
    targetNumberElement.textContent = targetNumber; // Update the displayed target number
}

function updateNumBooks(change) {
    const numBooksElement = document.getElementById('num-books');
    numBooks += change; // Update the target number
    numBooksElement.textContent = numBooks; // Update the displayed target number

    localStorage.setItem('numBooks', numBooks);
}




function displayProgressStats() {
    //display number of books read/need to be read
    if (targetNumber - numBooks < 0) {
        document.getElementById("num-more-books").textContent = 0;
    } else {
        document.getElementById("num-more-books").textContent = targetNumber - numBooks; 
    }
    document.getElementById("num-books-read").textContent = numBooks;
}