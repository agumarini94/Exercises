const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer source.txt:', err);
        return;
    }
    fs.writeFile('destination.txt', data,(err) => {
        if(err) {
            console.error('Error al escribir en destination.txt',err);
        }
        else {
            console.log('Contenido copiado a destination.txt')
        }
    });
});

//In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.
