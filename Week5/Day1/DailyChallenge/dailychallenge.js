function validateUnionType(value, allowedTypes) {
    //recorro el array
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var item = allowedTypes_1[_i];
        if (typeof value === item) {
            return (true);
        }
        else {
            return (false);
        }
    }
}
var allowedTypes = ['string', 'boolean'];
console.log(validateUnionType('hola', allowedTypes));
console.log(validateUnionType(123, allowedTypes));
