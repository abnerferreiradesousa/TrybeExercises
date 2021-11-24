// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...param) => param.reduce((acc, elemento) => acc + elemento, 0);

console.log(sum(25, 25, 26));
