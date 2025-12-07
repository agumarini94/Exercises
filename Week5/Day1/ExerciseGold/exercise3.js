function introduceAdvancedUser(user) {
    if (user.address !== undefined) { // ---> esto verifica si la address esta declarada o no 
        return ("holaaa ".concat(user.name, " , edad ").concat(user.age, " , address = ").concat(user.address));
    }
    else {
        return ("Sin address ".concat(user.name, " , edad ").concat(user.age));
    }
}
var user1 = { name: 'juan', age: 12, address: 'brenner 6' };
var user2 = { name: 'Zeballos', age: 102 };
console.log(introduceAdvancedUser(user1));
console.log(introduceAdvancedUser(user2));
