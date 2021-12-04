function getCoins(coins) {
    const url = 'https://api.coincap.io/v2/assets';
    const arr= [];
    fetch(url)
        .then((response) => response.json())
        .then((coins) => coins.data.forEach((co) => arr.push(co)))
        const li = document.querySelector('list-crypto');
        const createLi = document.createElement('li');
        createLi.innerText = 'oal';
        li.appendChild(createLi);
};

window.onload = getCoins;