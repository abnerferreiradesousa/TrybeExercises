// const testingScope = escopo => {
//         if (escopo === true) {
//           let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//           ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//           console.log(ifScope);
//         } else {
//           let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//           console.log(elseScope);
//         }
//         // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//       }

//       testingScope(true);

//QUESTÃO 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrDois = [];

// const localiza = oddsAndEvens.indexOf(Math.min(...[13, 3, 4, 10, 7, 2]));

// console.log(oddsAndEvens.splice(localiza, 1));
// console.log(oddsAndEvens);

// console.log(localiza);
const tamanho = oddsAndEvens.length;
for (let index = 0; index < tamanho; index +=1) {
    
    const menorNumeroLocalizado = Math.min(...oddsAndEvens);

    arrDois.push(menorNumeroLocalizado);

    const localizaPosicaoDoMenorNumber = oddsAndEvens.indexOf(Math.min(...oddsAndEvens));
    
    console.log(oddsAndEvens.splice(localizaPosicaoDoMenorNumber, 1));
    // if (localizaPosicaoDoMenorNumber > -1) {
    //   }

    // console.log(oddsAndEvens);
    // console.log(oddsAndEvens);
}
console.log(arrDois);


//MINHA MELHOR APOSTA

// for(let index = 0; index < 10; index += 1) {

//     if(oddsAndEvens[index] >= oddsAndEvens[index + 1]) {

//         let numero = oddsAndEvens[index];

//         oddsAndEvens[index] = oddsAndEvens[index + 1];

//         oddsAndEvens[index + 1] = numero

//     }
//     console.log(oddsAndEvens);
// }
///FIM DA MELHOR APOSTA

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`); // INTERESSANTE DEMAIS O USO DESSA ARROW FUNCTION


//GABARITO - ARMAZENANDO TODOS OS RESULTADOS

// const sortArrayBonus = array => {
//   const sortOddsAndEvens = array.sort((a, b) => a - b);
//   return sortOddsAndEvens;
// }

// const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
// console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);


//MINHA SOLUÇÃO

// function compara (a, b) {
//   return a - b;
// }

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const sortedArray = sortOddsAndEvens();

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);

