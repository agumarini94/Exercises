function greet(name) {
    if (name) {
        return ("hola, ".concat(name));
    }
    return ('hola');
}
console.log(greet());
console.log(greet('Perro'));
