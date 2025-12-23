const express = require('express'); //hice npm init express 
const router = express.Router();
const fs = require('fs'); //ya hice npm init fs
const path = require('path'); //hice npm init path

//hago la ruta del archivo json donde voy a guardar las tareas.. 
const filePath = path.join(__dirname, '../data/task.json')
router.get('/task', (req, res) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Error reading the file' });
        const tasks = JSON.parse(data);
        res.json(tasks);
    });
});
// obtengo la task segun el id 
router.get('/task/:id', (req, res) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ message: 'error reading the file' });
        const tasks = JSON.parse(data);
        const id = Number(req.params.id); //aca recibo el id que quiero buscar. 
        const task = tasks.find(t => t.id === id); //busco la tarea 
        if (!task) {
            return res.status(404).json({ message: 'task not found' });
        }
        res.json(task);
    });
});


//ahora hago el request post , para agregar una nueva tarea 
router.post('/task', (req, res) => {
    const { title, completed } = req.body;
    if (!title) { //esto valida que haya cargado el titulo antes de agregar algo al array. 
        return res.status(400).json({ message: 'title is required' });
    }
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ message: 'error reading the file' });
        const tasks = JSON.parse(data);
        const newTask = {
            id: tasks.length + 1,
            title,
            completed: completed || false
        };
        tasks.push(newTask); //agrego la nueva tarea a las tareas .
        fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
            if (err) return res.status(500).json({ message: 'error guardando el archivo' });
            res.status(201).json(newTask);
        });
    });
});

//PUT /tasks/:id: Actualizar una tarea por ID en el archivo JSON.
router.put('/task/:id', (req, res) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ message: 'error reading the file' });
        const tasks = JSON.parse(data); //primero tengo que leer task.json
        const id = Number(req.params.id); // recibo el id del url
        const task = tasks.find(t => t.id === id); //busco el id 
        if (!task) return res.status(404).json({ message: 'task not found it' }); //no encontre la task
        const { title, completed } = req.body; //estos son los parametros del objeto
        if (title !== undefined) { //si solo recibi title..
            task.title = title; //modifico el title
        }
        if (completed !== undefined) { //modifico el completed.. 
            task.completed = completed;
        };
        //ahora falta guardar los cambios en el archivo. 
        fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
            if (err) return res.status(500).json({ message: 'error saving file' });
            res.json(task); //devuelve la tarea modificada 
        });
    });
});

//ELIMINAR /tasks/:id: elimina una tarea por ID del archivo JSON.
router.delete('/task/:id', (req, res) => { //busca el id 
    fs.readFile(filePath, 'utf-8', (err, data) => { // primero leo los taks
        if (err) return res.status(500).json({ message: 'error reading the file' });
        const tasks = JSON.parse(data);
        const id = Number(req.params.id);// id del url a borrar 
        const index = tasks.findIndex(t => t.id === id);//busca el indice 
        if (index === -1) {
            return res.status(404).json({ message: 'task not found it' });
        }
        const deleteTask = tasks.splice(index, 1);
        //guardar los cambios en el archivo task.json
        /**  --> task= array donde guardo las tareas, JSON.. -> convierte objetos o array a text json .. , null 2 --> formatea el json, con sangria de 2 espacios asi queda legible el archivo. */
        fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
            if (err) return res.status(500).json({ message: 'error saving file, delete' });
            res.json(deleteTask[0]);
        });
    });
})

module.exports = router; 