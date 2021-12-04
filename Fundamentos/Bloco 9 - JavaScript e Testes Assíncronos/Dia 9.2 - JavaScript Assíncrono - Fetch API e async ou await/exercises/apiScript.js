// apiScript.js

// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   fetch(API_URL, { headers: { Accept: 'application/json' } })
//     .then(response => response.json())
//     .then(data =>
//       document.getElementById('jokeContainer').innerText = data.joke
//     );
// }

// window.onload = () => fetchJoke();

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    }
  const result = await fetch(API_URL, myObject);
    const dataJson = await result.json();
    console.log(dataJson.joke);
    document.getElementById('jokeContainer').innerText = dataJson.joke;
};

window.onload = () => fetchJoke();