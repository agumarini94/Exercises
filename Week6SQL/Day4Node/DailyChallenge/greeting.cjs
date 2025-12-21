//1.2 En greeting.js, defina una función llamada greetque toma un nombre como parámetro y devuelve un mensaje de saludo personalizado.

const greet = name => {
    return `Welcome , ${name}`
}

// Exporte la greetfunción utilizando el sistema de módulos Node.js.
module.exports = { 
    greet
}
