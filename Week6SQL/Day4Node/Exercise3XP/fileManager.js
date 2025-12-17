
// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
//     Implement the writeFile function to write content to a specified file using the fs module.
import fs from "fs";
export function readFile(file) {
    fs.readFile(file, 'utf-8', (err, data) => { //file should be my parameter
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}
export function writeFile(file) {
    fs.writeFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data, ' written perfectly ');
    });
}


// NEED TO BE CHECKED ! 
