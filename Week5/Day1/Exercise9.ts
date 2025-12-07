function greet(saludo: string, name?: string): string {
    if (typeof name === 'undefined') {
        return(saludo)
    }
    return(`${name} , ${saludo}`)
}

console.log(greet( 'Buenas tardes'))