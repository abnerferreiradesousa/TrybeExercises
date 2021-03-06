//for/of

// for(let numero of numbers) {
//     console.log(numero);
// }

// for de sempre


// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// MINHA RESOLUÇÃO

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for(let indice = 0; indice < numbers.length; indice += 1) {
//     soma = soma + numbers[indice];
// }
// console.log(soma);


//RESOLUÇÃO ALTERNATIVA
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// }

// console.log(result);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let mediaAritmetica = 0;

// for(let indice = 0; indice < numbers.length; indice += 1) {
//     soma = soma + numbers[indice];                     
//     mediaAritmetica = soma / numbers.length;
// }
// console.log(mediaAritmetica);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let mediaAritmetica = 0;

// for(let indice = 0; indice < numbers.length; indice += 1) {
//     soma = soma + numbers[indice];
//     mediaAritmetica = soma / numbers.length;
// }

// if(mediaAritmetica > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numeroMaisAlto = numbers[0];

// for(let indice = 0; indice < numbers.length; indice += 1) {
//     if(numbers[indice] > numeroMaisAlto) {
//         numeroMaisAlto = numbers[indice];
//     }
// }

// console.log(numeroMaisAlto);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let quantidadeDeImpares = 0;

// for(let indice = 0; indice < numbers.length; indice += 1) {
//     if(numbers[indice] % 2 === 1) {
//         quantidadeDeImpares = quantidadeDeImpares + 1;
//     } 
// }
// if(quantidadeDeImpares === 0) {
//     console.log('Nenhum valor ímpar encontrado')
// }
// console.log(quantidadeDeImpares);

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numeroMaisBaixo = numbers[0];

// for(let indice = 0; indice < numbers.length; indice += 1) {
//     if(numbers[indice] < numbers[0]) {
//         numeroMaisBaixo = numbers[indice];
//     }
// }
// console.log(numeroMaisBaixo);

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let novoArray = [];

// for(let indice = 1; indice <= 25; indice += 1) {
//     novoArray.push(indice);
// }
// console.log(novoArray);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// let novoArray = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// let novissimoArray = [];

// for(let indice = 0; indice < novoArray.length; indice += 1) {
//     novissimoArray.push(novoArray[indice] / 2);
// }
// console.log(novissimoArray);

//BÔNUS        
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

// function compararNumeros(a, b) {
//     return a - b;
// }

// console.log(numbers.sort(compararNumeros));

//RESPOSTA ALTERNATIVA 
    //INDICE   0  1  2  3   4   5  6    7  8   9
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

// function compararNumeros(a, b) {
//     return b - a;
// }

// console.log(numbers.sort(compararNumeros));

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArr = [];

// for(let index = 0; index < numbers.length; index += 1) {
//     if(index + 1 < numbers.length) {
//         newArr.push(numbers[index] * numbers[index + 1]);
//     } else {
//         newArr.push(numbers[index] * 2);
//     }
// }
// console.log(newArr);
