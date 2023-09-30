const savedReadingList = JSON.parse(localStorage.getItem('readingList')) || [];
const savedTbrList = JSON.parse(localStorage.getItem('tbrList')) || [];


document.addEventListener('DOMContentLoaded', function () {
    displayBooks();

    // Select the <p> element by its id
    const targetNumberDisplay = document.getElementById("target-number");

    // Update the content of the element with the targetNumber value
    targetNumberDisplay.innerHTML = targetNumber;

    const numBooksDisplay = document.getElementById("num-books");
    numBooksDisplay.innerHTML = numBooks;
    console.log(numBooks);


    //display goal dates
    const goalStartDate = localStorage.getItem("goalStartDate");
    const goalEndDate = localStorage.getItem("goalEndDate");



    document.getElementById("start-date-display").textContent = goalStartDate;
    document.getElementById("end-date-display").textContent = goalEndDate;

    //display goal progress
    document.getElementById("progress-percent").textContent = Math.round(localStorage.getItem("percent"));

    //display goal notes
    document.getElementById("goal-notes").textContent = localStorage.getItem("goalNotes");

    displayProgressStats();

    // Populate the dropdown with book titles
    const removeBookDropdown = document.getElementById('remove-book-dropdown');
    savedReadingList.forEach((book, index) => {
        const option = document.createElement('option');
        option.value = index; // Use the book index as the value
        option.text = book.title; // Display the book title
        removeBookDropdown.appendChild(option);
    });



    // Add an event listener to the "Confirm Remove" button
    const confirmRemoveButton = document.getElementById('done-remove');
    confirmRemoveButton.addEventListener('click', function () {
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
            displayProgressStats();
            
            //update goal percentage
            document.getElementById("progress-percent").textContent = Math.round(localStorage.getItem("percent"));

        }
    });


    // Populate the TBR dropdown with book titles
    const removeTbrDropdown = document.getElementById('remove-tbr-dropdown');
    savedTbrList.forEach((book, index) => {
        const option = document.createElement('option');
        option.value = index; // Use the book index as the value
        option.text = book.title; // Display the book title
        removeTbrDropdown.appendChild(option);
    });

    //add remove function to tbr section
    const confirmRemoveTbr = document.getElementById('tbr-done-remove');
    confirmRemoveTbr.addEventListener('click', function () {
        // Get the selected book index from the dropdown
        const selectedBookIndex = removeTbrDropdown.value;

        // Ensure a book is selected before proceeding
        if (selectedBookIndex !== '') {
            // Remove the selected book from the readingList array
            savedTbrList.splice(selectedBookIndex, 1);


            // Update the local storage (if needed)
            localStorage.setItem('tbrList', JSON.stringify(savedTbrList));

            // Repopulate the dropdown to reflect the updated list
            removeTbrDropdown.innerHTML = '';
            savedTbrList.forEach((book, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.text = book.title;
                removeTbrDropdown.appendChild(option);
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


    //TBR LIST
    const tbr = document.querySelector(".tbr-list-box");

    // Clear any existing content in box1
    tbr.innerHTML = "";
    console.log("tbr list array: ");
    console.log(savedTbrList);

    // Create an unordered list to display the books
    const tbrList = document.createElement("ul");
    tbrList.classList.add("tbr-list");

    // Loop through the savedReadingList and create list items for each book
    savedTbrList.forEach((book) => {
        const bookItem = document.createElement("li");
        bookItem.classList.add("tbr-item");

        // Create HTML structure to display book information
        bookItem.innerHTML = `
            <p>${book.title}</p>
            <p class="book-info-text">by ${book.author}</p>
            <p class="book-info-text">Notes: ${book.notes}</p>
        `;

        // Append the book item to the list
        tbrList.appendChild(bookItem);
        console.log("book appended!");
    });

    // Append the list to box1
    tbr.appendChild(tbrList);


    updateProgressBar();


}


// Function to update the progress bar
function updateProgressBar() {
    console.log("update progress bar called!");
    if (targetNumber === 0) {
        return;
    }

    const progressBar = document.querySelector('.progress');
    const progressRatio = (numBooks / targetNumber) * 100; // Calculate the progress ratio in percentage
    

    if (progressRatio <= 100) {
        progressBar.style.width = `${progressRatio}%`; // Update the width of the progress bar
        localStorage.setItem('percent', progressRatio);
    } 
    else {
        progressBar.style.width = "100%";
        localStorage.setItem('percent', 100);
    }

}

// Get the dropdown button and menu
const dropdownBtn = document.getElementById("remove-book-button");
const dropdownMenu = document.getElementById("remove-book-dropdown");
const doneButton = document.getElementById("done-remove");
const tbrRemoveButton = document.getElementById("remove-tbr-button");
const tbrDoneButton = document.getElementById("tbr-done-remove");
const tbrDropdownMenu = document.getElementById("remove-tbr-dropdown");

// Show the dropdown menu on click
dropdownBtn.addEventListener("click", function () {

    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
        doneButton.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
        doneButton.style.display = "none";
    }

});

doneButton.addEventListener("click", function () {
    dropdownMenu.style.display = "none";
    doneButton.style.display = "none";
  });

  tbrRemoveButton.addEventListener("click", function () {
    if (tbrDropdownMenu.style.display === "none" || tbrDropdownMenu.style.display === "") {
        tbrDropdownMenu.style.display = "block";
        tbrDoneButton.style.display = "block";
    } else {
        tbrDropdownMenu.style.display = "none";
        tbrDoneButton.style.display = "none";
    }

  });
  
  tbrDoneButton.addEventListener("click", function () {
      tbrDropdownMenu.style.display = "none";
      tbrDoneButton.style.display = "none";
    });