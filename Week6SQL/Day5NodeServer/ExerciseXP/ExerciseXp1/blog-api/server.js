const express = require('express')
const app = express();

//PARA CONECTAR A POSTMAN ----> 
app.use(express.json()); //this is for the post 

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
})
//create an data Array... 
const users = [
    { id: 1, title: 'Tincho hey', content: 'a film about a stupid man' },
    { id: 2, title: 'waserman rey', content: 'A men very inteligent' }
];
// GET / posts: Return a list of all blog posts.
app.get('/users', (req, res) => {
    res.json(users);
})

// GET / posts /: id: Return a specific blog post based on its id.

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((item) => item.id == id);
    if (!user) {
        res.send('not found');
        return;
    }
    res.json(user); // si pongo * users *, me trae todos los usuarios. ** 
});

// POST / posts: Create a new blog post.
/** POST REQUEST  */
app.post('/users', (req, res) => {
    const newBlog = {
        id: users.length + 1,
        title: 'Valeria',
        content: 'She is a so crazy woman'
    };
    users.push(newBlog);
    res.json(users);
});

//PUT /posts/:id: Update an existing blog post.
app.put('/users/:id', (req, res) => {
    const idToEdit = parseInt(req.params.id);
    const blog = users.find(u => u.id === idToEdit);
    if (!blog) {
        return res.status(404).json({ message: 'Post no encontrado ' });
    }
    blog.title = 'Estoy enfermo';
    blog.content = 'Today i cant breath';
    res.json(users);
});

// //DELETE /posts/:id: Delete a blog post.
app.delete('/users/:id', (req, res) => {
    const idDelete = Number(req.params.id);
    const index = users.findIndex(blogg => blogg.id === idDelete);
    if (index === -1) { //findIndex devuelve -1 si no encuentra nada. 
        return res.status(404).send('Blog not found');
    }
    users.splice(index, 1);
    res.json(users);
})
