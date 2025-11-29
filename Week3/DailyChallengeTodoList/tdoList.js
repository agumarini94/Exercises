const tasks = [];
// console.log(tasks)

function addTasks() {
    const myForm = document.getElementById('taskForm');
    const inputValor = document.getElementById('taskInput');
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log(inputValor.value); //recibo input, y muestro
        while (inputValor.value !== '') { //no string vacio
            //add the element to the array 
            tasks.push(inputValor.value); // agrega al final del array
            console.log(tasks);
            //make the checkbox <----=: 
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            // crea el x butotn <-----= y le sumo los atributos. <-----=:
            const buttonX = document.createElement('button');
            buttonX.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'; //agrega el icono x dentro del boton .
            buttonX.setAttribute('type', 'button');
            buttonX.innerHTML = 'X';
            buttonX.style.backgroundColor = 'salmon';
            buttonX.style.color = 'white';
            buttonX.setAttribute('class', 'btn-x');
            buttonX.setAttribute('title', 'Eliminar tarea');
        
//creo el nuevo div, le pongo atributo, y lo agrego a form 
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'listTasks');
            const textUser = document.createTextNode(inputValor.value); //agrega el texto sin borrar lo que estaba. 
            myForm.appendChild(newDiv); //suma al form
            newDiv.appendChild(buttonX);
            newDiv.appendChild(checkBox);
            newDiv.appendChild(textUser);
            break; //corta para q no sea bucle infinito. 
        }
    })
}

addTasks();