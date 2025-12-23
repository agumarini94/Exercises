const express = require('express');
const router = express.Router(); 
router.get('/todos', (req, res) => {
    // res.send('Hola, desde el router'); SOLO SE PUEDE ENVIAR UNA RES EN UN GET. ACA MANDO DOS. ESTA Y LA DE ABAJO.
    res.json(todos)
})

const todos = []; 

router.post('/todos', (req, res) => { //ESTO ES PARA CARGAR UN ELEMENTO 
    const { title, completed } = req.body; //aca extrae los datos que vienen en el body del request
    const newTodo = { //creo un nuevo objeto todo. 
        id: todos.length + 1,
        title: title,
        completed: completed || false
    };
    //guardo el nuevo todo, en el array.
    todos.push(newTodo); 
    res.status(201).json(newTodo); // --> respondo con status 201 creado, y el objeto creado. 
})
//AHORA VOY A HACER UN PUT, PARA MODIFICAR O ACTUALIZAR UN ELEMENTO, uso put
router.put('/todos/:id', (req, res) => {
    const id = Number(req.params.id); // --> el id viene en la url
    const { title, completed } = req.body; //--> Datos nuevos del body 
    //ahora busco el elemento por el id 
    const todo = todos.find(t => t.id === id) // --> busco el elemento t, segun el t.id que sea igual al id del url. 
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' }); //si no esta el id.. 
    }
    //Actualizo solo lo que viene en el body, si solo mande el title, o el completed ..
    if (title !== undefined) {
        todo.title = title;
    }
    if (completed !== undefined) {
        todo.completed = completed;
    }
    res.json(todo);
})
//ELIMINAR http://localhost:3000/todos/:id (Eliminar un elemento de tarea por ID)
router.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id); //--> Aca guarde el id q mando el usuario
    const index = todos.findIndex(t => t.id === id); //busco en todos, el indice
    if (index === -1) { //esto es si no existe. // si vino en el url posicion 2, es 1 xq el indice del array empieza del 0
        return res.status(404).json({message:'Not found index'}); 
    }
    //elimino el elemento del array
    const deletedTodo = todos.splice(index, 1); //elimina 1, desde la posicion index. 
    res.json(deletedTodo[0]);
})


module.exports = router;