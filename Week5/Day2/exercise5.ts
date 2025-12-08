// Create an interface User with properties id(readonly), name, and email.
// Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel.Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.

interface User{
    readonly id: number;
    name: string; 
    mail: string | number; 
}
interface PremiumUser extends User{
    membershipLevel?: string;
}
function printUserDetails(user: PremiumUser) { //user es el objeto que recibo
    console.log(`user id = ${user.id}, name ${user.name}, mail = ${user.mail}, and membershipLevel = ${user.membershipLevel}`)
}

const premiumUser = { //objeto.
    id: 1, 
    name: 'Kim',
    mail: 'adas@gmail.com',
    membershipLevel: 'premium'
}

const premiumUser2 = { //objeto.
    id: 1,
    name: 'Kim',
    mail: 'adas@gmail.com',
    membershipLevel: 'premium'
}

console.log(printUserDetails(premiumUser2));