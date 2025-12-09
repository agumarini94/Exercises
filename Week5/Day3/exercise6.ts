
// 🌟 Exercise 6: Intersection Types and Type Guards
// What You Will Learn
// Combine types using intersection types.
//     Use type guards to handle complex types safely.
//     Task
// Define a type Employee that combines Person and Job using intersection types.\
// Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.
// describeEmployee should return a specific message for each type of job.

interface Person {
    name: string,
    age: number,
}

interface Job{
    position: position,
    department: string
}
type position = 'Manager' | 'Developer';


function describeEmployee(employee: Employee) {
    if (employee.position === 'Manager') {
        return (`Welcome Manager ${employee.name}`);
    }   
    else {
        return (`Hola Developer ${employee.name}`);
    }
}

type Employee = Person & Job;
let employee: Employee = {
    name: 'eric',
    age: 30,
    position: 'Manager',
    department: 'Hotel Dan'
}

let employee2: Employee = {
    name: 'Juan',
    age: 104,
    position: 'Developer',
    department: 'Jardin'
}
console.log(describeEmployee(employee));
console.log(describeEmployee(employee2));