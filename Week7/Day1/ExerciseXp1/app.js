const express = require('express');
const app = express(); 
const router = require('./routes/')
app.use('/', router); // <- esto conecta las rutas

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
})
