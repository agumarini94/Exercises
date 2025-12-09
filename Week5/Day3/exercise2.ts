
// Create a function describeValue that accepts number | string.Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.
type alphanumeric = string | number;
function describeValue(parameter: alphanumeric) {
    if (typeof parameter === 'number') {
        return (`${parameter} = number`)
    }
    return (`${parameter} = string`)
}

console.log(describeValue(12));
