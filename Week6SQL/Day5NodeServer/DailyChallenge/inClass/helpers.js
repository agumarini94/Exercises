import { emojis } from "./data/emojies.js"; //esto trae el array de emojis 

export const getRandomNumber = (arr) => { //random number 
    return Math.floor(Math.random() * arr.length)
}; 

//random emoji from the array // this take the right emoji
export const getRandomElementFromArray = (arr) => {
    const randomIndex = getRandomNumber(arr);
    return arr[randomIndex]; // <-- esto de vuelve la rta correcta
}; 

export const generateOption = (currentEmoji, emojis) => {
    const options = [currentEmoji]

    while (options.length < 4) {
        const random = getRandomNumber(emojis)
        const randomEmoji = emojis[getRandomNumber(emojis)]
        if (!options.includes(randomEmoji.name)) { 
            options.push(randomEmoji.name) //agrego las random options en el array options. No repetidas.
        }
    }
    return options;
} //este es el emoji que saque de getRandomelement... 

export const shuffleArray = (arr) => { //esto cambia de lugar la respuesta correcta. 
    for (let i = arr.length - 1; i > 0, i--;) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; //this i dont know what is doing 
    }
    return arr;
}