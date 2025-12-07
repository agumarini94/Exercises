type AdvancedUser = {
    name: string,
    age: number,
    address?: string | number;
}
function introduceAdvancedUser(user: AdvancedUser) {
    if (user.address !== undefined) { // ---> esto verifica si la address esta declarada o no 
        return (`holaaa ${user.name} , edad ${user.age} , address = ${user.address}`);
    }
    else {
        return (`Sin address ${user.name} , edad ${user.age}`)
    }
}

let user1 = { name: 'juan', age: 12, address: 'brenner 6' };
let user2 = { name: 'Zeballos', age: 102 };
console.log(introduceAdvancedUser(user1));
console.log(introduceAdvancedUser(user2));

