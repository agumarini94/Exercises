// Create an interface User with properties id(readonly), name, and email.
// Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel.Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.
function printUserDetails(user) {
    console.log("user id = ".concat(user.id, ", name ").concat(user.name, ", mail = ").concat(user.mail, ", and membershipLevel = ").concat(user.membershipLevel));
}
var premiumUser = {
    id: 1,
    name: 'Kim',
    mail: 'adas@gmail.com',
    membershipLevel: 'premium'
};
var premiumUser2 = {
    id: 1,
    name: 'Kim',
    mail: 'adas@gmail.com',
    membershipLevel: 'premium'
};
console.log(printUserDetails(premiumUser2));
