function sumNumbersArray(parameters: (string | number)[]): number{
    // --> para que sea un array que acepta string y number, tiene que estar entre parentesis (... )[]; 
    let suma = 0;
    parameters.forEach(numeros => {
        if (typeof numeros === 'number') {
            suma += numeros;
        }
    })
    return (suma);   
}
let test1 = ['hola', 12, 13, 'perro'];
let test2 = ['1', 2, 'hola', 0, true, 8];
// console.log(sumNumbersArray(test1));
console.log(sumNumbersArray(test2));