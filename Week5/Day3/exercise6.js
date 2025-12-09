// 🌟 Exercise 6: Intersection Types and Type Guards
// What You Will Learn
// Combine types using intersection types.
//     Use type guards to handle complex types safely.
//     Task
// Define a type Employee that combines Person and Job using intersection types.\
// Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.
// describeEmployee should return a specific message for each type of job.
function describeEmployee(employee) {
    if (employee.position === 'Manager') {
        return ("Welcome Manager ".concat(employee.name));
    }
    else {
        return ("Hola developer ".concat(employee.name));
    }
}
var employee = {
    name: 'eric',
    age: 30,
    position: 'Manager',
    department: 'Hotel Dan'
};
var employee2 = {
    name: 'Juan',
    age: 104,
    position: 'Developer',
    department: 'Jardin'
};
console.log(describeEmployee(employee));
console.log(describeEmployee(employee2));
