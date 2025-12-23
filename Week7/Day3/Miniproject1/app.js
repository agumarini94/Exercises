const express = require('express');
const app = express();
const router = require('./routes/router')
app.use(express.json()); //middleware to use json en requests.
app.use('/', router);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});