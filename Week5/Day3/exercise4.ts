// Use type assertions to specify a type.
// Handle variables with union types.
//     Task
// Create a function getFirstElement that takes an array of number | string and uses type assertions to return the first element as a string. Test with arrays of mixed types.

function getFirstElement(myElements: (number | string)[]): string { // - EXPLICACION ABAJO 
    //myElements = nombre del parametro que recibe el array
    //:(number | string)[] --> el array contiene numeros y string 
    //:string --> devuelve un string 
    for (let i = 0; i < myElements.length; i++){
        if (typeof myElements[i] === 'string') {
            return (myElements[i] as string);
        }
    }
    return ('not found strings');
}    

let array1 = [123, 'mate', 1.42];
let array2 = [3.14, 555, 'hola'];
let array3 = [3.14, 555, 'Astronauta'];
// important that in the function only can accept number and string, so, not include in the array boolean
console.log(getFirstElement(array1));
console.log(getFirstElement(array2));
console.log(getFirstElement(array3));
