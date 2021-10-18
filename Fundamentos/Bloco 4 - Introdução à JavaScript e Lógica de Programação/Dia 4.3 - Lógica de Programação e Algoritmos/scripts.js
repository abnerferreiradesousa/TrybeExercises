//  1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

// let n = 5;

// for(let i = 1; i <= n; i += 1){
//     let asterisco = "";
//     for(let indice = 1; indice <= n; indice += 1) {
//         asterisco = asterisco + "*"; 
//     }
//     console.log(asterisco);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5;


// let asterisco = "";
// for(let indice = 1; indice <= n; indice += 1) {
//     asterisco = asterisco + "*";
//     console.log(asterisco); 
// }


// 3- Agora inverta o lado do triângulo. Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 5;
let asterisco = "*";
let espaco = "     ";
for(let linha = 0; linha < n; linha += 1) {
    for(let coluna = n; coluna > 0; coluna -= 1) {
         espaco -= " ";  
    }
    asterisco = espaco + "*"; 
    console.log(asterisco);
}

// let escadaDeAsteriscos = espaco + asterisco;
// console.log(escadaDeAsteriscos);

