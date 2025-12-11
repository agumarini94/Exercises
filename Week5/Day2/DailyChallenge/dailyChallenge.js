var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Library = /** @class */ (function () {
    function Library() {
        this.books = []; //array of book (?)
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book); // --> add the book in the array books 
    };
    Library.prototype.getBookDetails = function (idBook) {
        return "".concat(books[title].value, " , ").concat(books.author, " , ").concat(books.publishedYear);
    };
    return Library;
}());
var book1 = {
    title: 'harry potter',
    author: 'raquel',
    isbn: '123',
    publishYear: 2024
};
// 3) Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:
// A readonly property website(string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        //loop to go in the array 
        for (items in books) {
            console.log(this.books[items]);
        }
    };
    return DigitalLibrary;
}(Library));
var Library1 = new Library(); // --> Instance of Library 
Library1.addBook(book1);
console.log();
