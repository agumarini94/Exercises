//EXERCISE 5
const family = {
    father: 'lionel messi',
    bigBrother: 'luis suarez',
    mother: 'Maddona',
    dog: 'Mbappe'
};
for (keys in family){
    console.log(keys);
}
for (values in family) {
    console.log(family[values]);
}

//EXERCISE 6 
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};

let text = '';
for (let key in details) {
    text += key + ' ' + details[key] + ' ';
}
text = text.trim(); // para quitar el espacio final
console.log(text); // "my name is Rudolf the reindeer"

//EXERCISE 7 
//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secretSociety = '';
for (letters of names) {
    secretSociety = secretSociety + letters[0];
    //letters = jack , philip.. letters[0] seria la primera letra de cada uno
}
console.log(secretSociety + ' is the name of the society');

