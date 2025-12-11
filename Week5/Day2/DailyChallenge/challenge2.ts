// Cree dos tipos TypeAy TypeBcon propiedades diferentes.Luego, cree un tipo de intersección de TypeAy TypeBy demuestre que el orden de los tipos no importa.
interface TypeA { 
    isNeat: boolean,
    color: string
}

interface typeB {
    isArgentinian: boolean,
    drinkMate: boolean
}

type Augustin = TypeA & typeB 

let augustin: Augustin = {
    isNeat: true,
    color: 'turquoise',
    isArgentinian: true,
    drinkMate: true
}

type Betel = typeB & TypeA {
    let betel: Betel = {
        isNeat: true,
        color: 'cream',
        isArgentinian: false,
        drinkMate: false
    }
}