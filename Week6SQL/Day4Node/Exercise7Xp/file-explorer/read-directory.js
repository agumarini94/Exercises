//In read - directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.
const fs = require("fs");
// lee el contenido del director actual 
fs.readdir('.', (err, files) => {
    if (err) {
        console.log('error al leer dir', err);
        return;
    }
    //mostrar los archivos en la terminal
    console.log('Archivos en el dir');
    files.forEach(file => {
        console.log(file);
    });
});
