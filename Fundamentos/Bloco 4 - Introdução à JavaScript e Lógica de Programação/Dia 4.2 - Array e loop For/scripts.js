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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica = 0;

for(let indice = 0; indice < numbers.length; indice += 1) {
    soma = soma + numbers[indice];
    mediaAritmetica = soma / numbers.length;
}

if(mediaAritmetica > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}