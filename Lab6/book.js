// Array of objects
const book = [
    {title: "How to for dummies", description: "How to simply do things", author: "James Walts", pages: 1522},
    {title: "The Art of Coding", description: "A guide to becoming a better programmer", author: "Jane Doe", pages: 350},
    {title: "Cooking 101", description: "Basic recipes for beginners", author: "John Smith", pages: 200},
    {title: "Travel the World", description: "A journey through the most beautiful places", author: "Emily Clark", pages: 450},
    {title: "History Unveiled", description: "Exploring the past to understand the present", author: "Robert Brown", pages: 600}
];

// commented code is for a single book //

// Singular object
// const book = {
//     "title" : "How to for dummies",
//     "description" : "How to simply do things",
//     "author" : "James Walts",
//     "pages" : 1522
// }

// Log every object individually
// console.log(book.title);
// console.log(book.description);
// console.log(book.author);
// console.log(book.pages);

// Log each object in the array individually
book.forEach((b) => {
    console.log(b.title);
    console.log(b.description);
    console.log(b.author);
    console.log(b.pages);
});

// Update book description
book.description = "New description for the book";

// Log everything and this will have the new description
console.log(book); 