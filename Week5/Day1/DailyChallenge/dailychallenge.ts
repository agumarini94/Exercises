function validateUnionType(value: any, allowedTypes: string[]): boolean{ // ---> string es el nombre del array 
        //recorro el array
        for (let item of allowedTypes) { 
            if (typeof value === item) { //compare the type of value(hola for example, 123,) with allowedTypes: string
                return (true);// --> if is string return true.. 
            }
            else {
                return (false);
            }
        }
    }

let allowedTypes = ['string', 'boolean'];

console.log(validateUnionType('hola', ['string', 'number'])); //--> true
console.log(validateUnionType(123, ['boolean']));// --> false 
console.log(validateUnionType(1233, ['string', 'number']));// --> false 

