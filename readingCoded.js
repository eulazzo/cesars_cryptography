const fs = require('fs');

const data = fs.readFileSync('answer.json',(err)=>{
    if(err) throw err;
})
const answer = JSON.parse(data);
const encodedData = answer.cifrado;

 console.log(answer);
 
module.exports = encodedData;


 