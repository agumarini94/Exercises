// Class Library: Create a class Library with:
var Library = /** @class */ (function () {
    function Library() {
        this.books = []; //array of book (?)
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookDetails = function () {
        // return (Book.isbn)  (?)
    };
    return Library;
}());
var book1 = {
    title: 'harry potter',
    author: 'raquel',
    isbn: '123',
    publishYear: 2024
};
var Library1 = new Library(); // --> Instance of Library 
Library1.addBook(book1);
