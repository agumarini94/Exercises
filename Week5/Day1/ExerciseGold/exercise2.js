function sumNumbersArray(parameters) {
    var suma = 0;
    parameters.forEach(function (numeros) {
        if (typeof numeros === 'number') {
            suma += numeros;
        }
    });
    return (suma);
}
var test1 = ['hola', 12, 13, 'perro'];
var test2 = ['1', 2, 'hola', 0, true, 8];
// console.log(sumNumbersArray(test1));
console.log(sumNumbersArray(test2));
