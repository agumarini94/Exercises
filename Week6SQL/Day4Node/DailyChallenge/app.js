// const {greeting} = require.... old module
// En app.js, requiere el greeting.jsmódulo y utiliza la greetfunción para saludar a un usuario.
//greeting.cjs --> Si tu archivo usa CommonJS (module.exports) pero quieres importarlo con import { ... }, necesitas decirle a Node.js explícitamente que es un módulo CJS.
//{} indica que estás extrayendo una propiedad específica del objeto exportado.
import { greet } from "./greeting.cjs" // extraigo greet, que es una funcion, de greetings.. 

//* En app.js, requiere el read-file.jsmódulo y llama a la función que has escrito para mostrar el contenido del archivo.
import { read_file } from './read-file.js'; 

//to use chalk module need to change a the new module 
import { displayColorMessage, displayErrorMessage } from "./colorful-messages.js";

console.log(greet("John"));
console.log(displayColorMessage('Happy hanuka')); //Mostrar el msg en color 
// console.log(displayErrorMessage('Something went wrong')); //esto solo muestra la funcion, la parte del error. por eso lo comente. 


try { //esto llama a la funcion read_file, y le paso el archivo que tengo que leer, y await hace que la funcion no se siga ejecutando hasta que no termine de leer el archivo. 
    const data = await read_file('./files/data.txt');
    console.log(displayColorMessage(data) + ', --> texto de mi data.txt');//muestra la data en color amarillo, como esta declarado en la funcion display.. 
} catch (error) {
    console.log(displayErrorMessage(error.message));
}