function processValue(parameter) {
    if (typeof parameter === 'number') {
        parameter = "$".concat(parameter);
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
