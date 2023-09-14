


document.getElementById("add-book-form").addEventListener("submit", function(event) {


    event.preventDefault(); // Prevent the form from submitting in the default way

    console.log("submit button pressed");


    //collect book data from form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const notes = document.getElementById("notes").value;

    //create book object to store data
    const book = {
        title: title,
        author: author,
        notes: notes
    };


    addBookToReadingList(book);

    //clear form
    document.getElementById("add-book-form").reset();

});


function logSubmit(event) {
    log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById("add-book-form");
  const log = document.getElementById("log");
  form.addEventListener("submit", logSubmit);

function addBookToReadingList(book) {
    readingList.push(book);
    displayBooks();
}
