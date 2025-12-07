function processValue(parameter: string | number) {
    if (typeof parameter === 'number') {
        parameter = `$${parameter}`;
    }
    else {
        parameter = Number(parameter);
    }
    return (parameter);
}

console.log(processValue(100));
console.log(processValue('90'));
    
console.log(processValue(435));
console.log(processValue('perro'));

// funcion ternario, mas corta 
// function processValue(parameter: string | number): string | number{
//     // ---> parameter (puede ser string o number) : la respuesta puede ser string o number
//     return (typeof parameter === 'number') ? `$${parameter}` : Number: (parameter);
//     //---> devolver , si typeof parametro es numero --> en modo string $xxx , o si no, paso a Number x .. 
// }