// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code goes here

    // Example: You can access DOM elements and manipulate them
    var header = document.querySelector('header');
    header.addEventListener('click', function () {
        // Your event handler code goes here
        alert('Header clicked!');
    });

    // More JavaScript code...
});



// Function to open the form
function openForm() {
    document.getElementById("add-book-form").style.display = "block";
}

// Function to close the form
function closeForm() {
    document.getElementById("add-book-form").style.display = "none";
}

// Event listener for the "Add Book" button
document.getElementById("add-book-button").addEventListener("click", openForm);

// Event listener for the "Cancel" button
document.getElementById("closeFormButton").addEventListener("click", closeForm);

// Event listener for the form submission
document.getElementById("addBookForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle form submission, e.g., add the book to the user's list
    // You can use JavaScript to collect form data and perform actions accordingly
    // After adding the book, you can close the form using closeForm() function
});
