const crypto = require('crypto');
const answerDecoded = require('./decoded');
const text = answerDecoded;
const alg = 'sha1';
// const text = 'sometimes i think we are alone in the universe & sometimes i think we are not. in either case the idea is quite staggering arthur c. clarke';
//cesarsCryptography
//This project was made to apply for a Codenation's course (react)
const crypted = crypto.createHash(alg)
        .update(text)
        .digest('hex');
 
module.exports = crypted;






 
    
