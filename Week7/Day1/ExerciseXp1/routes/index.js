const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hola, desde el router');
})

router.get('/about', (req, res) => { // en postman escribo localhost:3003/about
    res.send('Esta es la ruta del about');
})

module.exports = router; 