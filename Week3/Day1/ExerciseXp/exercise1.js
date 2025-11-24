const people = ["Greg", "Mary", "Devon", "James"];
// const: no permite reasignar la variable, pero sí modificar su contenido interno
// (arrays y objetos pueden cambiar). No se puede declarar dos veces en el mismo scope.

// ---- PARTE1 ----
// Write code to remove “Greg” from the people array.
people.shift()
console.log(people)

//----- PARTE 2 ------
// Write code to replace “James” to “Jason”.
people.splice(3, 1, 'Jason')
console.log(people)

//----- PARTE 3 -------
// Write code to add your name to the end of the people array.
people.push('Agustin');
console.log(people);

// ------ PARTE 4 ------------
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));

// --------- PARTE 5 ----------

//Write code to make a copy of the people array using the slice method.
let peopleSlice = people.slice(0, 1).concat(people.slice(2, 4)) //slice(0,1) toma el elemento 0, pero no el 1. concat concatena la cadena, y slice(2,4) toma el elemento 2, 3, y 4 que es el ultimo lo borra.
// console.log()
console.log(peopleSlice)

// --------PARTE 6 ----- 
//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo'))
//will return -1 because is not in the array


// -------- PARTE 7 ------- 
//Create a variable called last which value is the last element of the array.
let lastVariable = people.slice(-1)
console.log(lastVariable) 
//length is showing how many elements there're in the array, and the last index element is the quantity


// -------- Part II - Loops --- 
//Using a loop, iterate through the people array and console.log each person.

for (let i = 0; i < people.length; i++) {
    console.log('Name in the index ' + i + 'is  --> ' + people[i]) 
    
}

//Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
let j = 0;
while (people[j] != 'Devon') {
    console.log('Name in the index ' + j + 'is  --> ' + people[j]) 
    j++;
    break;
}
