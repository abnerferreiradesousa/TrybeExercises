// Crie uma função que recebe três parâmetros retorna uma Promise .
  // Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
  // Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
  // Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
  // Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
function promiseTraining(param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if(typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
      reject(new Error("Informe apenas números"))
    }
    if(typeof param1 === 'number' && typeof param2 === 'number' && typeof param3 === 'number') {
      const result = (param1 + param2) * param3;
      if (result < 50) reject(new Error("Valor muito baixo"))
      resolve(`Resultado é: ${result}`)
    }
  }) 
}

// Escreva um código para consumir a função construída no exercício anterior.
  // Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
  // Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  // Utilize then e catch para manipular a Promise retornada pela função:
  // Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
  // Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

promiseTraining(Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1))
  .then((content) => console.log(content))
  .catch((err) => console.log(err.message))

// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

async function promiseWithAsync() {
  try {
    const result = await promiseTraining(Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1))
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}