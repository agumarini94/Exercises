// Use generic constraints to limit type usage.
// Create a generic function that works with constrained types.
//     Task
// Create a generic function logLength that takes a parameter of type T constrained to types with a length property(like string or Array).The function should log the length.


function logLength<T extends { length: number }> (parameter :T): void {
    console.log(parameter.length);
}

let myOracion = 'estoy solo en el curso';
let myArray = [123, 'hola', 'chau'];
logLength(myOracion);
logLength(myArray); //el console log esta en la funcion. 


//<T extends le agrega que es cualquier tipo, que tenga length , y un numero> OJO, QUE ABRE < Y CIERRA > . 
//parameter:T , es el parametro que recibo. 
// void hace que la funcion no devuelva nada. 





// EXPLICACION ! 
// function identity<T>(arg: T): T {
//     return arg;
// }
// arg → es el parámetro que recibe la función.

// : T después de arg → indica el tipo del parámetro.

// Como T es genérico, puede ser number, string, boolean, objeto, etc.

// : T después del paréntesis → indica el tipo que devuelve la función.

// Será del mismo tipo que el parámetro, gracias a que usamos el genérico T.

// En criollo:

// “Le paso algo a la función(arg), TypeScript sabe de qué tipo es(: T), y la función me devuelve algo del mismo tipo(: T al final)”.

