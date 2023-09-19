// Get a reference to the form and the target books input field
const form = document.getElementById("add-goal-form"); // Replace with your actual form ID
const targetBooksInput = document.getElementById("target-books");

// Add an event listener to the form's submit button
form.addEventListener("submit", function (event) {
    // Prevent the form from submitting in the default way
    event.preventDefault();

    // Get the user's input for target books as an integer
    const targetBooksValue = parseInt(targetBooksInput.value);

    // Check if the input is a positive integer
    if (isNaN(targetBooksValue) || targetBooksValue <= 0 || targetBooksValue % 1 !== 0) {
        // Display an error message to the user
        alert("Please enter a valid positive integer for the target number of books.");
        // Clear the input field
        targetBooksInput.value = "";
        // Set focus back to the input field for correction
        targetBooksInput.focus();
        return false; // Prevent form submission
    }

    targetNumber = targetBooksValue;
    localStorage.setItem("goal", targetNumber);
    //TO-DO: save the goal.
});
