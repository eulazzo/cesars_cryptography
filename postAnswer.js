const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const token = '17bd7b435bcf33d6deda7d0f38c72fb60ab9d987';
const url = `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${token}`

const answerJson = fs.readFileSync('answer.json');
const form = new FormData();
// form.append("file", './answer.json');

const headers = {
    'content-type': 'multipart/form-data'
}
form.append('file', fs.createReadStream(answerJson), {
    filename: 'answer.json'
});

axios.create({headers})
.post(url, form).then(response => {
    console.log(response);
}).catch(error => {
    if (error.response) {
        console.log(error.response);
    }
});

