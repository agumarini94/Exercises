const express = require('express');
const app = express();
const router = require('./routes/todos'); //<-- esto conecta app.js con routes.. para poder usar el router.. 
app.use(express.json()) // esto es importante para enviar los datos POST.
app.use('/', router);// 
//este es un middleware, para poder leer JSON en el body de las request, sin esto req.body seria undefined y en el post.
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});

