// Class Library: Create a class Library with:
// A private property books(array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.
interface Book { //--> esto es mi "hoja del formulario vacia con los cuadrados que debo llenar"
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    constructor(
        private books: Book[] = [], //array of book (?)
    ) {
        this.books = books;
    }
    addBook(book:Book) { //method / book is the parameter that i got 
        this.books.push(book);   // --> add the book in the array books 
    }

    getBookDetails(id:stirng) { //id book parameter that i get 
        let myBook = this.books.filter(item => item.isbn === id)
        return `${myBook.title} , ${myBook.author} , ${myBook.}`
    }
}

let book1 = { // this go to books 
    title: 'harry potter',
    author: 'raquel',
    isbn: '123',
    publishYear: 2024
}
// 3) Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:
// A readonly property website(string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.
class DigitalLibrary extends Library{
    readonly website: string;
    listBooks() {
        //loop to go in the array 
        for (items in books) {
            console.log(this.books[items]);
        }
    }
    }

const Library1 = new Library() // --> Instance of Library 
Library1.addBook(book1); 

console.log()