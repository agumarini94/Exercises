class Customer {
    isCreditAllowed(): boolean {
        // verifica si el cliente tiene credito aprobado
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // si el proovedor esta en la lista seleccionada.. 
        return true;
    }
}
// --> Un businessPartner puede ser customer o supplier
type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
    let message: string; //--> variable para guardar la resp..
    //si partner es una instancia de customer.. 
    //estamos viendo si este socio es cliente y no un proovedor
    if (partner instanceof Customer) {
        //si es cliente llamo a su metodo isCreditAllowed..
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue"; //Problema de credito.. 
    }
//si partner es una instancia de Supplier.. 
    if (partner instanceof Supplier) {
//si es un proovedor, llamo a su metodo isInShortList..
        message = partner.isInShortList()
            ? "Sign a new contract with the supplier"
            : "Need to evaluate further"; //no esta en shortList..
    }

    return message; //devolvemos el mensaje final.. 
    
}