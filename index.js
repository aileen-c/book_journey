const savedReadingList = JSON.parse(localStorage.getItem('readingList')) || [];


document.addEventListener('DOMContentLoaded', function () {
    displayBooks();

    // Select the <p> element by its id
    const targetNumberDisplay = document.getElementById("target-number");

    // Update the content of the element with the targetNumber value
    targetNumberDisplay.innerHTML = targetNumber;

    const numBooksDisplay = document.getElementById("num-books");
    numBooksDisplay.innerHTML = numBooks;
    console.log(numBooks);

    // Populate the dropdown with book titles
    const removeBookDropdown = document.getElementById('remove-book-dropdown');
    savedReadingList.forEach((book, index) => {
        const option = document.createElement('option');
        option.value = index; // Use the book index as the value
        option.text = book.title; // Display the book title
        removeBookDropdown.appendChild(option);
    });

    // Add an event listener to the "Remove Book" button
    const removeBookButton = document.getElementById('remove-book-button');
    removeBookButton.addEventListener('click', function () {
        // Get the selected book index from the dropdown
        const selectedBookIndex = removeBookDropdown.value;

        // Ensure a book is selected before proceeding
        if (selectedBookIndex !== '') {
            // Remove the selected book from the readingList array
            savedReadingList.splice(selectedBookIndex, 1);

            updateNumBooks(-1);

            // Update the local storage (if needed)
            localStorage.setItem('readingList', JSON.stringify(savedReadingList));

            // Repopulate the dropdown to reflect the updated list
            removeBookDropdown.innerHTML = '';
            savedReadingList.forEach((book, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.text = book.title;
                removeBookDropdown.appendChild(option);
            });

            // You can also update the display of books on the page (if needed)
            displayBooks();
        }
    });
});


function displayBooks() {
    console.log("displayBooksCalled");
    const box1 = document.querySelector(".books-read-box");

    // Clear any existing content in box1
    box1.innerHTML = "";
    console.log("reading list array: ");
    console.log(savedReadingList);

    // Create an unordered list to display the books
    const bookList = document.createElement("ul");
    bookList.classList.add("book-list");

    // Loop through the savedReadingList and create list items for each book
    savedReadingList.forEach((book) => {
        const bookItem = document.createElement("li");
        bookItem.classList.add("book-item");

        // Create HTML structure to display book information
        bookItem.innerHTML = `
            <p>${book.title}</p>
            <p class="book-info-text">by ${book.author}</p>
            <p class="book-info-text">Notes: ${book.notes}</p>
        `;

        // Append the book item to the list
        bookList.appendChild(bookItem);
        console.log("book appended!");
    });

    // Append the list to box1
    box1.appendChild(bookList);


    updateProgressBar();


}


// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.querySelector('.progress');
    const progressRatio = (numBooks / targetNumber) * 100; // Calculate the progress ratio in percentage
    if (progressRatio <= 100) {
        progressBar.style.width = `${progressRatio}%`; // Update the width of the progress bar
    } else {
        progressBar.style.width = "100%";
    }

}