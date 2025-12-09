// Convert a variable from one type to another using type casting.
//     Understand the difference between type casting and type assertions.
//     Task
// Create a variable someValue of type any and cast it to a string.Then, use it as a string.
var someValue = 123;
var stringSomeVlaue = String(someValue);
if (typeof stringSomeVlaue === 'string') {
    console.log("its a string ==> ".concat(stringSomeVlaue)); //true
}
else {
    console.log('its not string');
}
// ----> LEER LO DE ABAJO <---- 
// let stringSomeVlaue = (someValue as string);
// //it will be a string only in this line, but after in the rest of the code is a number. 
// if (typeof stringSomeVlaue === 'string') {
//     console.log(stringSomeVlaue); //false
// }
// else {
//     console.log('its not string'); //this will be the output because 123 is continuing being a number, just when i use as, is used like stirng. 
// }
// console.log(typeof stringSomeVlaue); 
