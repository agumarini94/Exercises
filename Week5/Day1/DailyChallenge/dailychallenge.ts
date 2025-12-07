function validateUnionType(value: any, allowedTypes: string[]): boolean{
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

console.log(validateUnionType('hola', allowedTypes));
console.log(validateUnionType(123, allowedTypes));
