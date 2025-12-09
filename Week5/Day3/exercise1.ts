// Define an intersection type PersonWithAddress that combines Person and Address types.Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city,

interface Person { 
    name: string;
    age: number;
}

interface Addres {
    street: string | number;
    city: string;
}

type personWithAddress = Person & Addres; 

let persona: personWithAddress ={
    name: 'eric',
    age: 30,
    street: 'Trolo 123',
    city: 'Gaylandia'
}
console.log(persona);