const human = [
    { name: 'Rodrigo', age: 23, location: 'Florida' },
    { name: 'Aviv', age: 44, location: 'Tel aviv' },
    { name: 'Maor', age: 29, location: 'Roshain' }
];

//3)Export the array using the ES6 module syntax.
// create a package json, with npm init -y <--* and change on type = module
//Diference with CommonJS: 
//ES6 module wont ejecute the code of the module until the full module be charged. 

export const humano =human; 