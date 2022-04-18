const fs = require('fs');
const axios = require('axios');
const { log } = require('console');
const url = 'https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json';
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem 
// no formato id - Nome . Por exemplo: 1 - Homer Simpson .

async function myTest() {
  const { data } = await axios.get(url);
  data.map((character) => {
    log(character.id, ' - ', character.name);
  })
  return data;
}

myTest()
  .then((content) => console.log(content))
  .catch((err) => console.log(err.message))