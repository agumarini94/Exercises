const express = require('express');
const app = express();
app.use(express.json()); // // Este middleware analiza JSON en el body de las peticiones

const PORT = 3000; // use 3000 because 5000 is ocupated for something of apple.. 
app.listen(PORT, () => {
    console.log(`run on ${PORT} `);
})


// Define a basic data array containing a few book objects.Each book object should have properties like id, title, author, and publishedYear.
const books = [
    {
        id: 1, title: 'Harry Potter', author: 'Valeria', publishedYear: 2005
    },
    {
        id: 2, title: 'Dragon Ball', author: 'Brad Pit', publishedYear: 1994
    }
];

// Implement the “Read all” route by defining a route at GET / api / books.Send a JSON response with the books array.
//READALL => “GET /users 👉 Trae la lista completa
app.get('/books', (req, res) => {
    res.json(books);
})

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find((libro) => libro.id === parseInt(id));
    if (!book) { // si no encunetro el libro... 
       return res.status(404).send('Book not found it'); //res.status(codigo).send(contenido)..
    }
    res.status(200).json(book) //muestra el libro con el id que mando el usuario
})

app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1, title: 'Matemon', author: 'Messi', publishedYear: 2009
    };
    books.push(newBook)
    res.status(201).json(books);
    console.log('Libro agregado');
})

//NO SE XQ NO ANDA PERO SUPUESTAMENTE TODO FUNCIONA 

// Implemente la ruta "Crear" en POST / api / books.Use el express.json()middleware para analizar el contenido del cuerpo JSON.Dentro del controlador de ruta, cree un nuevo objeto libro con un ID incrementado y los datos del cuerpo de la solicitud.Añada el nuevo libro a la booksmatriz y devuelva una respuesta JSON con el nuevo libro y un código de estado de 201(Creado).


// Implemente la ruta "Lectura" definiendo una ruta en GET / api / books /: bookId.Extraiga el bookIdparámetro de la URL y úselo para encontrar el libro correspondiente en el booksarray.Si se encuentra el libro, envíe una respuesta JSON con los detalles del libro y un código de estado 2a00(OK).Si no se encuentra el libro, envíe un estado 404 con el mensaje "Libro no encontrado".
