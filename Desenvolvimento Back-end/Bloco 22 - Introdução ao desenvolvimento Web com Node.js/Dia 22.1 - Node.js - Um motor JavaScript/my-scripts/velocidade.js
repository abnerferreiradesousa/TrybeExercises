const readline = require('readline-sync');

const speed = readline.questionInt("Qual velocidade você se encontra? ");
const time = readline.questionInt("E o seu tempo? ");

const speedAVG = (speed, time) => {
 const result = speed / time
 return `${result.toFixed(2)}km/s`
}

console.log(speedAVG(speed, time))