let sentence = 'Messi not play bad, i like it'; 
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad'); 
let newSentence = '';
console.log(wordBad, wordNot);
if (wordBad > wordNot) {
    newSentence = sentence.replace('not', '');
    newSentence = newSentence.replace('bad', 'good');
    console.log(newSentence)
}
else {
    console.log(sentence);
}