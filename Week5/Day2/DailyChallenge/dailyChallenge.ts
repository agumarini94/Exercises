
// Class Library: Create a class Library with:

// A private property books(array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.
// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:

// A readonly property website(string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.

interface Book { //--> esto es mi "hoja del formulario vacia con los cuadrados que debo llenar"
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Book[] = []; //array of book (?)

    public addBook(book){ //method / book is the parameter that i get 
        this.books.push(book) 
    }


    getBookDetails() { //method 2
        // return (Book.isbn)  (?)
    }
}
let book1 = { // this go to books 
    title: 'harry potter',
    author: 'raquel',
    isbn: '123',
    publishYear: 2024
}

const Library1 = new Library() // --> Instance of Library 
Library1.addBook(book1); 

console.log()