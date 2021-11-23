const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} foi cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

emailListInData.forEach((element) => {
    showEmailList(element)
});

//FOREACH

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// // const convertToUpperCase = (name, index) => {
// //   names[index] = name.toUpperCase();
// // };

// const teste = names.forEach((name, index) => {
//     names[index] = name.toLowerCase(); //o p q do names[index], pq eu estou alterando cada posição do array, se fosse somente o names o run retornaria um erro, pois estamos tentando reatribuir o array em sua totalidade..
// });
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]


//FIND

const array1 = [ {num: 5}, {num: 12}, {num: 8}, {num: 130}, {num: 44} ];

const found = array1.find(element => element.num > 100); //o find, a partir de uma condição passada na sua callback, retorna o elemento que satisfizer a condição, porém se for um objeto e vc quiser retornar um valor específico, ele não irá funcionar adequadamente, pois assm que a condição for satisfeita ele retornará o elemento por inteiro.

// console.log(found);
// expected output: 12


//SOME 

// function isBiggerThan10(element, index, array) {
//     return element > 10;
//   }

//   let arr = [2, 5, 8, 1, 4];
//   let arr2 = [10, 5, 10, 1, 4];

//   console.log(arr2.some((element) => {    //SOME só retorna bool
//       if(element > 10){
//           return element;
//       }}));

//EVERY

// function isBigEnough(element, index, array) {
//     return element >= 10;
//   }
//  let arr = [12, 54, 18, 130];
//  console.log(arr.every(isBigEnough));
  
  
// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('M', listNames)); // false
  
// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((element) => element === name)
}

// console.log(hasName(names, 'Mateus'))

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every((element) => element.age >= minimumAge);
//   }
  
//   console.log(verifyAges(people, 18));

//PARA FIXAR

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

// people.sort((a, b) => b.age - a.age);
// console.log(people);

//teste do destruction
  // const getTall = people.filter(({ age }) => age > 19)
  // console.log(getTall);

//teste de hofs personalizadas
  // const getMultiplier = multiplier => number => multiplier * number;

  // const double = getMultiplier(2);
  // console.log(double(5));

