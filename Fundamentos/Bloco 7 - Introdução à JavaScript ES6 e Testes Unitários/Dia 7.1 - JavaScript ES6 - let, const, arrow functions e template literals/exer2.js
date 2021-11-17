//1.Crie uma função que receba um número e retorne seu fatorial.

// let number = 4;
// let result = 1;

// for (let index = number; index > 0; index -= 1) {
//     result = result * index;
// }
// console.log(result);

//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

//2.Crie uma função que receba uma frase e retorne qual a maior palavra.

// const largestWord = (text) => {
//     const  arr = text.split(' ');

//     let result = 0;

//     for (let index = 0; index < arr.length; index += 1) {

//         if(arr[index].length > result){
//             result = arr[index].length;
//         }
//     }
//     console.log(result);
// }

// largestWord('Antônio foi no banheiro e não sabemos o que aconteceu')

//PQ MEU RETURN NÃO ESTÁ FUNCIONANDO


//3.Crie uma página que contenha:

// const btn = document.querySelector('.btn');
// const p = document.querySelector('.register')

// let clickCount = 0;

// btn.addEventListener('click', () => {
//     clickCount += 1; 
//     p.innerText = `Número de clicks ----> ${clickCount}`;
//     console.log(clickCount);
// })


//4.Crie um código JavaScript com a seguinte especificação:

//4.1

const findString = (text) => {
    let strg = "Tryber x aqui!";
    let newStrg = strg.replace(/x/ig, text); //o 'i' no RegEx serve para ignorar diferenças entre maiúsculas e minúsculas. E o 'g' determina que mais de uma alteração seja feita.
    // console.log(newStrg);
}

let word = 'Abner'
findString(word);

let arr = ['Git', 'HTML', 'EMPATIA', 'JS', 'REDUX'];

//4.2

const recive = (newStrg) => {
    console.log(newStrg);
}