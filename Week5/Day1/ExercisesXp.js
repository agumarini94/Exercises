// --> Exercise 3 < --
// Utilice tipos de unión para declarar una variable idque puede ser una cadena o un número.
var myId;
myId = 100; //-- > solo puede ser un valor a la vez, number o string pero de a uno. 
console.log(myId); // --> por eso cuando lo veo, veo en este caso 100. 
// ---> Exercise 4 <--- 
function suma(num1) {
    if (num1 > 1) {
        return ('positivo');
    }
    else if (num1 === 0) {
        return ('cero');
    }
    else {
        return ('Negative number');
    }
}
console.log(suma(0));
//----> Exercise 5 <----- 
// Cree una función getDetailsque tome un nombre y una edad como entrada y devuelva una tupla con los valores de entrada y un mensaje de bienvenida.
function mostrarTupla(nombre, edad) {
    var myTuple = [nombre, edad];
    return ("welcome ".concat(myTuple, " , your name is ").concat(myTuple[0], " , and your age is ").concat(myTuple[1]));
} // Los elementos de la tupla se acceden mediante su índice: myTuple[0], myTuple[1], etc.
console.log(mostrarTupla('Eva', 31));
function createPerson(nombre, edad) {
    return {
        fname: nombre,
        agePerson: edad
    };
}
console.log(createPerson('Peter', 9));
