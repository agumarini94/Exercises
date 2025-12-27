const express = require('express')
const router = express.Router();
router.get('/books', (req, res) => { 
    res.json(books);
});//conectar en localhost:3003/books 

const books = []; //array vacio 

//GET BOOKS BY ID: 
router.get('/books/:id', (req, res) => {
    const id = Number(req.params.id); //id que recibo en el url 
    const libro = books.find(l => l.id === id); //busco el libro 
    if (!libro) {
        res.status(404).json({ message: 'This id book doesnt exist!' });
    }
    res.json(libro);
})
//ADD A NEW BOOK CON POST 

router.post('/books', (req, res) => {
    const { title, description, author } = req.body; //<-- datos que vienen
    const newBook = {
        id: books.length + 1,
        title: title,
        description: description,
        author: author
    }; // creo el nuevo obj book.
    books.push(newBook); //añado el nuevo book al array
    res.status(201).json(newBook); //<-- responde con "elemento agregado.." y el obj creado . 

})
//UPDATE A BOOK BY ID 
router.put('/books/:id', (req, res) => {
    const id = Number(req.params.id); //id que viene en la url 
    const { title, description, author } = req.body; // esto es lo que traigo
    const libro = books.find(l => l.id === id)// busco el elemento libro, segun el lid = al id que vino en la url .
    if (!libro) {
        return res.status(404).json({ message: 'This book doesnt exist!' });
    }
    //si el libro existe, actualizo los datos 
    if (title !== undefined) {
        //libro representa al libro que quiero modificar
        libro.title = title;
    }
    if (description !== undefined) {
        libro.description = description;
    }
    if (author !== undefined) {
        libro.author = author;
    }
    res.json(libro) //devuelvo el libro actualizado  
})

//DELETE A BOOK BY ID 
router.delete('/books/:id', (req, res) => {
    const id = Number(req.params.id); //id a borrar
    const libroDeleteIndex = books.findIndex(ld => ld.id === id);
    //uso findex xq necesito encontrar el Index. Me trae el indice si lo encontro, y si no lo encuentra devuelve -1. 
    if (libroDeleteIndex === -1) { //si el indice no existe.. 
        return res.status(404).json({ message: 'Book not found it' });
    }
    const libroDelete = books.splice(libroDeleteIndex, 1); //elimina el libro del array `books` según su índice y devuelve el libro eliminado
    res.json(libroDelete[0]);
});

module.exports = router; 
//GET ALL BOOKS GET http://localhost:3000/books (Get all books) --> localhost:3003/books <--





//DELETE A BOOK BY ID 

