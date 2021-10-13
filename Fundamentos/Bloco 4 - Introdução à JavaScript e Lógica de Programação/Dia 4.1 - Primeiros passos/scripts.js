//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

// const a = 10;
// const b = 5;
// console.log("Soma: " + (a + b));
// console.log("Subtração: " + (a - b));
// console.log("Multiplicação: " + (a * b));
// console.log("Divisão: " + (a / b));
// console.log("Módulo: " + (a % b));

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 7;
// const b = 10;

// if(a > b) {
//     console.log(a);
// } else if (a < b) {
//     console.log(b);
// } else if (a == b)  {
// console.log("São o mesmo valor");
// } 

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const a = 10;
// const b = 20;
// const c = 30;

// if(a > b && a > c) {  
//     console.log(a);
// } else if(b > a && b > c) { 
//     console.log(b);
// } else if(c > a && c > b) { 
//     console.log(c);
// } else {
//     console.log("São iguais");
// }

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const a = -1;

// if(a > 0) {
//     console.log("positive");
// } else if(a < 0) {
//     console.log("negative");
// } else {
//     console.log("zero");
// }

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const anguloA = 40;
// const anguloB = 100;
// const anguloC = 40;

// let somaDosAngulos = anguloA + anguloB + anguloC;
// let maiorQueZero = anguloA > 0 && anguloB > 0 && anguloC > 0; 

// if(maiorQueZero) {
//     if(somaDosAngulos === 180) {
//         console.log(true);
//     } else {
//         console.log(false);
//     };
// } else {
//     console.log("ERRO: Um dos angulos é menor que zero.");
// }

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// const peca = "rainha";

// switch (peca.toUpperCase()) {
//     case 'TORRE':
//       console.log("Torre - Move-se em linha rreta horizontalmente e verticalmente");
//       break;
//     case "BISPO":
//       console.log("Bispo - Move-se nas diagonais");
//       break;
//     case "RAINHA":
//       console.log("Rainha - Diagonal, horizontal e vertical");
//       break;
//     case "PEÃO": 
//       console.log("Peão - Para frente, uma casa vez");
//       break;
//     case "REI":
//       console.log("Rei - Qualquer direção adjacente");
//       break;
//     case "CAVALO": 
//       console.log("Cavalo - pode pular sobre casas na diagonal e na frente");
//       break;
//     default:
//       console.log("ERRO: Não é uma peça de Xadrez");
//       break;
// }

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// const notaPercentual = 101;
// const regra = notaPercentual > 0 || notaPercentual <= 100;

//  if(regra) {
//      if(notaPercentual >= 90) {
//         console.log("Nota convertida: A");
//     } else if(notaPercentual >= 80) {
//         console.log("Nota convertida: B");
//     } else if(notaPercentual >= 70) {
//         console.log("Nota convertida: C");
//     } else if(notaPercentual >= 60) {
//         console.log("Nota convertida: D");
//     } else if(notaPercentual >= 50) {
//         console.log("Nota convertida: E");
//     } else {
//         console.log("Nota convertida: F");
//     };
//  } else {
//      console.log("ERRO: Encerrando programa")
//  }
 
// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// const a = 11;
// const b = 15;
// const c = 17;

// if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// const a = 10;
// const b = 21;
// const c = 2;

// if(a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// const custoDoProduto = 5;
// const precoDoProduto = 20;

// if(custoDoProduto >= 0 && precoDoProduto >= 0) {
//     const custoTotal = custoDoProduto + 2;
//     const lucroTotal = (precoDoProduto - custoTotal) * 1000;
//     console.log(lucroTotal);
// } else {
//     console.log("Os valores podem ser negativos");
// };
   
// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

//MÉTODO 1

//INSS

// const salarioBruto = 5100.00;
// let inss = salarioBruto * 0.11;
// let salarioBase = salarioBruto - inss;
// console.log(salarioBase);

//IMPOSTO DE RENDA

// let ir = (salarioBase * 0.15) - 354.80;
// let salarioLiquido = salarioBase - ir;
// console.log(salarioLiquido);
// console.log(ir);

//MÉTODO 2

const salarioBruto = 1600.00;
//INSS

if(salarioBruto <= 1556.94) {
    let inss = salarioBruto * 0.08;
    let salarioBase = salarioBruto - inss;
    console.log("Salário bruto com desconto do INSS: " + salarioBase); 
    if(salarioBase <= 1903.98) {
        console.log("Até R$ 1.903,98: isento de imposto de renda");
    }
} else if(salarioBruto <= 2594.92) {
    let inss = salarioBruto * 0.09;
    let salarioBase = salarioBruto - inss;
    console.log("Salário bruto com desconto do INSS: " + salarioBase);
    if(salarioBase <= 1903.98) {
        console.log("Até R$ 1.903,98: isento de imposto de renda");
    }
    else if(salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        let ir = (salarioBase * 0.075) - 142.80;
        let salarioLiquido = salarioBase - ir;
        console.log("Salário base com desconto do IR: " + salarioLiquido);
    }
} else if(salarioBruto <= 5189.92) {
    let inss = salarioBruto * 0.11;
    let salarioBase = salarioBruto - inss;
    console.log("Salário bruto com desconto do INSS: " + salarioBase);
    if(salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        let ir = (salarioBase * 0.075) - 142.80;
        let salarioLiquido = salarioBase - ir;
        console.log("Salário base com desconto do IR: " + salarioLiquido);
    } else if(salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        let ir = (salarioBase * 0.15) - 354.80;
        let salarioLiquido = salarioBase - ir;
        console.log("Salário base com desconto do IR: " + salarioLiquido);
    } else if(salarioBase >= 3751.06 && salarioBase <= 4664.64) {
        let ir = (salarioBase * 0.225) - 636.13;
        let salarioLiquido = salarioBase - ir;
        console.log("Salário base com desconto do IR: " + salarioLiquido);
    } else if(salarioBase <= 4664.68) {
        let ir = (salarioBase * 0.275) - 869.36;
        let salarioLiquido = salarioBase - ir;
        console.log("Salário base com desconto do IR: " + salarioLiquido);
    }
} else if(salarioBruto > 5189.92) {
    let inss = 570.88;
    let salarioBase = salarioBruto - inss;
    console.log("Salário bruto com desconto do INSS: " + salarioBase);
    if(salarioBase > 4664.69) {
        let ir = (salarioBase * 0.275) - 869.36;
        let salarioLiquido = salarioBase - ir;
        console.log("Salário base com desconto do IR: " + salarioLiquido);
    }
}
