// getData.js
const fetch = require('node-fetch');

const getSuperHero = async (url) => {
  const promise = await fetch(url)
  const data = await promise.json();

  return data.name;
};

getSuperHero('https://www.superheroapi.com/api.php/4192484924171229/502') // Wonder Woman

module.exports = getSuperHero;