const express = require('express');
const app = express(); 
const router = require('./routes/books.js');
app.use(express.json()); //<-- sin esto, no puedo enviar los datos POST. 
//siempre poner el app.use,, antes de las rutas xq sino sale error 
app.use('/', router); //<-- esto conecta las rutas. 
const PORT = 3003; 
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
})
