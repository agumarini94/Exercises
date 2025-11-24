const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
        alreadyRead: false
    }
];

// 2️⃣ Seleccionamos la sección donde vamos a agregar los libros
const section = document.querySelector(".listBooks");

// 3️⃣ Recorremos el array de libros
allBooks.forEach(book => {
    // Creamos un div para cada libro
    const bookDiv = document.createElement("div");

    // Creamos un elemento p para el título y autor
    const bookInfo = document.createElement("p");
    bookInfo.textContent = `${book.title} written by ${book.author}`;

    // Si el libro ya fue leído, cambiamos el color del texto a rojo
    if (book.alreadyRead) {
        bookInfo.style.color = "red";
    }

    // Creamos la imagen del libro
    const bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.style.width = "100px"; // ancho 100px

    // Agregamos el texto y la imagen al div del libro
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookImg);

    // Agregamos el div del libro a la sección
    section.appendChild(bookDiv);
});