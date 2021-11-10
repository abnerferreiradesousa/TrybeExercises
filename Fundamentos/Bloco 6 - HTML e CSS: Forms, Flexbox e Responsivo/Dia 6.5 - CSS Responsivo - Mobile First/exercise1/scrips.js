

//QUESTÃO 4

// let roof = 10;
// let somaMultipleOf3 = 0;
// let somaMultipleOf5 = 0;

// function somaOfMultiple(roof) {
//   for (let index = 1; index < roof; index += 1) {
//     let calc = roof - index;
//     if (calc % 3 === 0) {
//       somaMultipleOf3 = somaMultipleOf3 + calc;
//     }
//     else if (calc % 5 === 0) {
//       somaMultipleOf5 = somaMultipleOf5 + calc;
//     }
// }

// result = somaMultipleOf3 + somaMultipleOf5;
// return result;
// }

// somaOfMultiple(10);

// console.log(somaMultipleOf3);
// console.log(somaMultipleOf5);
// console.log(somaMultipleOf3 + somaMultipleOf5);
// console.log(somaMultipleOf5);

// //questao 3

let valor = 10;
let result = [];

for(let index = 0; index <= valor; index += 1) {
    let calc = valor - index;
    if(calc <= valor && calc > 0) {
        result.push(calc + '...')
    }
    if(calc === 0) {
        result.push(calc + '!!!')
    }

}
let text = "";
for(let index = 0; index < result.length; index +=1) {
    text = text + result[index];
}
console.log(text);
console.log(result)
