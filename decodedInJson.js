const answerDecoded = require('./decoded');
const crypted = require('./crypto');
const fs = require('fs');

fs.readFile('answer.json',(err,data)=>{
    if(err)throw err
    const answer = JSON.parse(data);
    answer.resumo_criptografico = crypted;
    answer.decifrado = answerDecoded;

    fs.writeFileSync('answer.json', JSON.stringify(answer),(err)=>{
        if  (err) throw err;
    })  
})
 
 


 



