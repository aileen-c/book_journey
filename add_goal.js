// Get a reference to the form and the target books input field
const form = document.getElementById("add-goal-form"); // Replace with your actual form ID
const targetBooksInput = document.getElementById("target-books");
const startDateInput = document.getElementById("goal-start-date");
const endDateInput = document.getElementById("goal-end-date");


// Add event listener to the form's submit button
form.addEventListener("submit", function (event) {
    // Prevent form from submitting in default way
    event.preventDefault();

    // Get user's input for target books as an integer
    const targetBooksValue = parseInt(targetBooksInput.value);

    // Check if input is a positive integer
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


    //Get user input for goal start and end date
    const startDateValue = startDateInput.value;
    const endDateValue = endDateInput.value;
    console.log(startDateValue);
    console.log(endDateValue);

    localStorage.setItem("goalStartDate", startDateValue);
    localStorage.setItem("goalEndDate", endDateValue);

    //get user input for goal notes
    const goalNotes = document.getElementById("notes").value;
    localStorage.setItem("goalNotes", goalNotes);

    window.location.href="index.html"
});
