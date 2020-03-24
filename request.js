const token = '17bd7b435bcf33d6deda7d0f38c72fb60ab9d987';
const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`;
const axios = require('axios');
const fs = require('fs');

const getDataAndWriteInJson = async()=>{

    const apiResult = await axios.get(url);
    fs.writeFileSync('answer.json',JSON.stringify(apiResult.data),(err)=>{
        if (err) throw err; 
    })
}
getDataAndWriteInJson();
 