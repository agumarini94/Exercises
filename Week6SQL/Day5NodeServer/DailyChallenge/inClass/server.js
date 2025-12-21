import express from 'express' //crea el server
import { config } from 'dotenv' //this dont know what is doing 
import { emojis } from './data/emojies.js'; //traigo los emojis
import { getRandomElementFromArray, generateOption, shuffleArray } from './helpers.js'; //traigo las funciones. 

import path from 'path';
config();  //this dont know wat is doing 
console.log(path.resolve()) ;     
console.log(emojis); 

const app = express() 

const PORT = process.env.PORT || 3000 //process is for developer.. 

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
}); 
const __dirname = path.resolve(); //this dont know what is
app.use('/', express.static(__dirname + '/public')); //need to be app.use... 
/**body parser */
app.use(express.json()); 

app.get('/play', (req, res) => {
    const randomEmoji = getRandomElementFromArray(emojis); //this is the right answer
    const guessingOption = generateOption(randomEmoji.name, emojis); //this are the false options 
    const theShuffledArray = shuffleArray(guessingOption) //this shuffle the answers (? )
    res.json({ randomEmoji, theShuffledArray });
})

app.post('/play', (req, res) => {
    const { hint, guesse } = req.body;
    let score = 0;
    if (hint.toLowerCase() === guesse.toLowerCase()) { 
        score++; //si la ocutla es igual a la que hay que adivinar.. 
        const randomEmoji = getRandomElementFromArray(emojis);
        const guessingOption = generateOption(randomEmoji.name, emojis);
        const theShuffledArray = shuffleArray(guessingOption)
        res.json({ message: 'Correct!', score,randomEmoji,theShuffledArray });
        return;
    }
    res.json({ message: 'Try again!', score }); //si no acerto.. 

})
