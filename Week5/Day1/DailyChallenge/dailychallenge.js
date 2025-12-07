function validateUnionType(value, allowedTypes) {
    //recorro el array
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var item = allowedTypes_1[_i];
        if (typeof value === item) { //compare the type of value(hola for example, 123,) with allowedTypes: string
            return (true); // --> if is string return true.. 
        }
        else {
            return (false);
        }
    }
}
var allowedTypes = ['string', 'boolean'];
console.log(validateUnionType('hola', ['string', 'number'])); //--> true
console.log(validateUnionType(123, ['boolean'])); // --> false xq compara 123, con boolean
console.log(validateUnionType(1233, ['string', 'number'])); // --> false 
