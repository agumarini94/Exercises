export class TodoList {
    constructor(tareas) {
        this.todos = [];
        //aca van las propiedades de la class
    }
    //aca van los methodos 
    addTasks(task) { //add tareas to the array. 
        this.todos.push({ name: task, done: false });
    }
    markTasks(taskName) { //it get the tarea and mark like do it 
        this.todos.forEach(t => {
            if (t.name === taskName) {
                t.done = true;
            }
        });
    }
    listTasks() {
        this.todos.forEach(t => {
            console.log(`${t.name} - ${t.done ? "complete" : "pendiente"}`);
        });
    }
}