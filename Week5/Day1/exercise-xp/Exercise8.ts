function getAction(accion: string): string{
    //--> accion string signinfica el tipo de parametro que recibo.
    //---> El segudno string es el tipo de resultado que devuelve la funcion. 
    //--> Necesito los dos por que uno es el que recibe y el otro es el que devuelve.. 
    switch (accion) {
        case 'Admin':
            return('Manage users and settings');
        case 'editor':
            return('Edit content');
        case 'viewer':
            return('View content');
        case 'guest':
            return('Limited access');
        default:
            return('Invalid role');     
    }
}

console.log(getAction('editor'));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));
