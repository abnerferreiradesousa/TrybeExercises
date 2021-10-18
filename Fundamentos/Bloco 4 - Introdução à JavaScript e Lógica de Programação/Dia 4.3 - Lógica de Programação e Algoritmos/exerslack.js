// exercício 1:
// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// { area: 0, perimetro: 0 }
// perimetro = (2*base) + (2*altura)
// area = base * altura

// function areaEperimetroQuadrilatero(base, altura) {
//     let quadrilatero = {
//         area: base * altura,
//         perimetro: (2 * base) + (2 * altura),
//     }
//     return quadrilatero;
// }
// console.log(areaEperimetroQuadrilatero(2, 3));

// exercício 2
/* 1 - crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares 
 e ímpares no formato: 
 { pares: 0,
   impares: 0 } */


// function quantParesImpares(arr) {
//     let result = {
//         pares: 0,
//         impares: 0,
//     }
//        for(let index = 0; index < arr.length; index += 1) {
//            if(arr[index] % 2 === 0) {                                                     
//                 result.pares += 1;
//            } {
//                result.impares += 1;
//            }
//        }
// return result
//    }
// let numbers = [2, 5, 7, 8, 10, 13, 15];

// console.log(quantParesImpares(numbers))


//SOLUÇÃO DA GABI
// function criarNumeros(numeros) {
//     let quantidade = {
//         numeroPar: 0,
//         numeroImpar: 0
//     }
//     for (let i of numeros) {
//         if (i %2 === 0) {
//             quantidade.numeroPar += 1;
//         } else {
//             quantidade.numeroImpar += 1;
//         }
//     }
//     return quantidade;
// }
// console.log(criarNumeros(numbers));

/**
 * 
 *  Crie uma função que receba uma string word e outra string ending. 
 * Verifique se a string ending é o final da string word . Considere que a string ending 
 * sempre será menor que a string word. 
 * 
 * Valor de teste: 'trybe' e 'be'.
 * Valor esperado no retorno da função: true
 * 
 * verificaFimPalavra('trybe', 'be');
 * Retorno esperado: true
 * 
 * verificaFimPalavra('joaofernando', 'fernan');
 * Retorno esperado: false
 * 
 * 
 * USAR O SPLIT: 
*/
