const readline = require('readline-sync');

const logResult = (misteriousNumber, value) => {
  if (misteriousNumber === Number(value)) {
    return console.log(`Parabéns, número correto!${misteriousNumber} é igual à ${value}!`);
  }
  return console.log(`Opa, não foi dessa vez. O número era ${misteriousNumber} e não ${value}`);
}

const guessNumber = () => {
  const misteriousNumber = Math.floor(Math.random() * 10);
  const value = readline.question("Adivinhe o numero que estou pensando de 0 a 10? ");

  logResult(misteriousNumber, value);
  
  const tryAgain = readline.question("Quer jogar de novo? ");
  if (tryAgain === 's') {
    guessNumber();
  }
  return console.log('OK, até a proxima');
}

guessNumber();