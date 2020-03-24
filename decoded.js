const data = require('./readingCoded');
const encodedData = data.split(' ');
let answerDecoded = [];
let caracterToNumber;
const lettersAtoG = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

encodedData.forEach(word => {
    for (let caracter of word) {
        caracterToNumber = caracter.charCodeAt();
        if (caracterToNumber < 123 && caracterToNumber > 96) {
            if (lettersAtoG.indexOf(caracter) > -1) {
                caracterToNumber = caracterToNumber + 19;
            } else {
                caracterToNumber = caracterToNumber - 7;
            }
            answerDecoded.push(String.fromCharCode(caracterToNumber));
        } else {
            answerDecoded.push(caracter);
        }
    }
    answerDecoded.push(' ');
});
 
answerDecoded = answerDecoded.join('').trim();
module.exports = answerDecoded;


 
