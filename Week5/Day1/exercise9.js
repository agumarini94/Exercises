function greet(name, saludo) {
    if (typeof name === 'undefined') {
        return (saludo);
    }
    return ("".concat(name, " , ").concat(saludo));
}
console.log(greet('Buenas tardes'));
