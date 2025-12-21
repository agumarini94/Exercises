import { promises as fs } from "fs"; //--> promises as fs devuelve promesas, lo que permite usar async/await y escribir codigo mas limpio. Permite usar funciones de fs basada en promesas, en lugar de call backs, lo que hace el codigo mas legible y facil. 
//FS -> FileSystem -> sirve para trabajar con archivos y carpetas y permite leer, escribir, borrar, etc.. 
export const read_file = async (path) => {
    try {
        return await fs.readFile(path, "utf-8");
        //fs.readfile permite abrir y leer el archivo 
        //(path) es un parametro, cuando llamo a la funcion, yo le mando el archivo que leer. utf-8 le indica  el idioma en que leer.
        // await le indica que la funcion no se siga ejecutando hasta que no termine de leer
    } catch (error) {
        throw new Error(`Failed to read file, error message ${error.message}`);
    }
};
