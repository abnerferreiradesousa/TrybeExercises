// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

// const numbers = [19, 21, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (arr) => {
//   // Adiciona seu código aqui
//     return arr.find((number) => number % 3 === 0 && number % 5 === 0); 
// }

// console.log(findDivisibleBy3And5(numbers))

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (arr) => {
//     return arr.find((element) => element.length === 5);
// }

// console.log(findNameWithFiveLetters(names));

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     return musicas.find((musica) => musica.id === id);
//   }
  
//   console.log(findMusic('31031687'))

//USO DO PARAMETRO INDEX NAS HOFS

const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

//O INDEX É USADO -NA LINHA 49 E 51 PQ ELE QUER ALTERAR UMA PROPRIEDADE NO OBJETO, SEM O PARAMETRO INDEX ELE ADICIONARÁ MAIS UMA PROPRIEDADE;
function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGrades();

// console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]