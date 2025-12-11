// Escriba una función generateReportque tome un array de BusinessPartnerobjetos.La función debe iterar sobre el array y devolver una lista de cadenas que resuman el estado de cada socio:

// Si el socio es un Customer, devuelve "Customer - Credit Allowed"o "Customer - Credit Denied"se basa en isCreditAllowed().
// Si el socio es un Supplier, devuelve "Supplier - Shortlisted"o "Supplier - Not Shortlisted"se basa en isInShortList().

class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function generateReport(partners: BusinessPartner[]):string {
    partners.map(partner => {
        
    })
}




function signContract(partner: BusinessPartner): string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList()
            ? "Sign a new contract with the supplier"
            : "Need to evaluate further";
    }

    return message;
}