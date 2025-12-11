interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}


// Define un tipo Customercomo un tipo de intersección de BusinessPartnery Contact.Crea una instancia del Customertipo e inicialízala con las propiedades adecuadas.

type Customer = BusinessPartner & Contact 
// & crea una union entre ambas interfaces .
let cusomer: Customer = {
    name: 'Bally',
    credit: 10000,
    email: 'bally@gmail.com',
    phone: 45435435
}