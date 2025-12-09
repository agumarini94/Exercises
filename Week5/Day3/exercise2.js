// Create a function describeValue that accepts number | string.Use type guards to return a description based on the input type:
function describeValue(parameter) {
    if (typeof parameter === 'number') {
        return ("".concat(parameter, " = number"));
    }
    return ("".concat(parameter, " = string"));
}
console.log(describeValue(12));
