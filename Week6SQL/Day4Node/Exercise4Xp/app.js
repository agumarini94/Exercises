//6) In app.js, import the TodoList class from the todo.js module.
import { TodoList } from "./todo.js";

//instance 
const lista = new TodoList(); // this is a new instance. LISTA 
//i add some tareas using the metod addTask
lista.addTasks('Clean the dishes') // --> lista, es una instancia de todoLIst. 
lista.addTasks('Clean the floor');
    
//now i show all the tareas 
lista.listTasks();

//now i mark like finish the task
lista.markTasks('Clean the dishes');


//now should show a tarea like finish it. 

lista.listTasks();