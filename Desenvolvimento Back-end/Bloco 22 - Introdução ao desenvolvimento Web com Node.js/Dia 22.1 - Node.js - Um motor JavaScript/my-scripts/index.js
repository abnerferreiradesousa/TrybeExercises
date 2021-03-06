// const readline = require('readline-sync');
// const { exec } = require('child_process');

// const scriptsArr = ['sorteio.js', 'imc.js', 'velocidade.js'];
//   // animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
  
//   const getScript = () => {
//     index = readline.keyInSelect(scriptsArr, 'Qual script você deseja executar, King?');

//     if (scriptsArr[index] === 'imc.js') exec(`npm run imc`)
    
//     if (scriptsArr[index] === 'sorteio.js') exec(`npm run sorteio`)
    
//     if (scriptsArr[index] === 'velocidade.js') exec(`npm run velocidade`)

//     console.log('Ok, Script ' + scriptsArr[index] + ' está rodando...');
// }

// console.log(getScript());


// NAO TERMINA DE EXECUTAR OS SCRIPTS


const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;
console.log(scriptNumber);

const script = scripts[scriptNumber];

if (!script) console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);