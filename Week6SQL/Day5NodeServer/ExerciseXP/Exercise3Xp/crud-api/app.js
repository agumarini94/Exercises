const express = require('express');
//In app.js, import the express module and create an instance of an Express app.
const app = express(); //<-- 

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
const PORT = 3000; //use 3000 because 5000 is ocupated for something of apple . 
app.listen(PORT, () => {
    console.log(`Server working on ${PORT}`)
});

const fetchPosts = require('./data/dataService')
app.get('/posts', async (req, res) => { //Endpoint para obtener todos los posts. 
    console.log('GET /posts received'); 
    try {
        const posts = await fetchPosts(); //traigo los datos de la API posts.
        console.log('Posts fetched:', posts.length); 
        res.json(posts); //muestro los datos en formato json. 
        console.log('The data has been successfully');
    } catch (error) {
        res.status(500).json({ message: 'error al obtener los datos de post' });
    }
})
