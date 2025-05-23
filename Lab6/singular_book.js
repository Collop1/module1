const book = {
    "title" : "How to for dummies",
    "description" : "How to simply do things",
    "author" : "James Walts",
    "pages" : 1522
}

// Log every object individually
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.pages);

// Update book description
book.description = "New description for the book";

// Log everything and this will have the new description
console.log(book); 