function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
    if (name) {
        return(`hola, ${name}`)
    }
    return ('hola');
}
console.log(greet());
console.log(greet('Perro'));