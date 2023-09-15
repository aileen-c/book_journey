const savedReadingList = JSON.parse(localStorage.getItem('readingList')) || [];


document.addEventListener('DOMContentLoaded', function () {
    displayBooks();
});

function displayBooks() {
    console.log("displayBooksCalled");
    const box1 = document.querySelector(".books-read-box");

    // Clear any existing content in box1
    box1.innerHTML = "";
    console.log("reading list array: ");
    console.log(readingList);

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
}
