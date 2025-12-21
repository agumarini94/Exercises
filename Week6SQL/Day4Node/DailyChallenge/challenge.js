import { greet } from './greeting.cjs';
import { displayColorMessage, displayErrorMessage } from './colorful-messages.js';
import { read_file } from './read-file.js';

console.log(displayColorMessage(greet('Betel')));

try {
    const data = await read_file('./files/data.txt');
    console.log(data);
} catch (error) {
    console.log(displayErrorMessage(error.message));
}



//INTEGRAR TODO, EXERCISE : 
// En challenge.js, se requieren los módulos de las tareas anteriores: greeting.js, colorful - message.js, y read - file.js.

// Utilice la greetfunción para saludar al usuario, mostrar el mensaje colorido y leer y mostrar el contenido del archivo.

// Ejecútelo challenge.jsusando Node.js y vea el desafío completo en acción.