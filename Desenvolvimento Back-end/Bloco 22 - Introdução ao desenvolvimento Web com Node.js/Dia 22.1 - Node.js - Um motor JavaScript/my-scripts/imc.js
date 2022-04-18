const readline = require('readline-sync');

const altura = readline.questionFloat("Qual sua altura? ");
const peso = readline.questionFloat("Qual seu peso? ");

function calc(peso, altura) {
  
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  if (imc < 18.5) return console.log(`${imc} Abaixo do peso (magreza)`)
  if (imc < 24.9) return console.log(`${imc} Peso normal`)
  if (imc < 29.9) return console.log(`${imc} Acima do peso (sobrepeso)`)
  if (imc < 34.9) return console.log(`${imc} Obesidade grau I`)
  if (imc < 39.9) return console.log(`${imc} Obesidade grau II`)
  if (imc >= 40) return console.log(`${imc} Obesidade graus III e IV`)
}

console.log(calc(peso, altura));

