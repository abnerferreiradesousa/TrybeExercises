const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920, 
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//   1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947(year) {
  return books.find((elemento) => elemento.author.birthYear === year);
}

//   console.log(authorBornIn1947(1947));

// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook; //RECEBE NOME

  let result = books[0].name.length; //GUARDA O TAMANHO DO NOME DO PRIMEIRO LIVRO

  books.forEach((elemento) => {

    if (result > elemento.name.length) {

      result = elemento.name.length; //RESULT RECEBE TAMANHO DO LIVRO ATUAL SE A CONDIÇÃO FOR ACEITA

      nameBook = elemento.name; //NAMEBOOK RECEBE O NOME DO LIVRO ATUAL QUE ATENDEU A CONDIÇÃO DE SER MENOR QUE O NOME DO LIVRO ANTERIOR
    };
  });
  return nameBook;
}

// console.log(smallerName());

//TESTE PARA ENTRAR DENTRO DO IF - COM SUCESSO
// if(!nameBook) {
//     console.log('entrou aqui');
// }

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const expectedResult = {
//     author: {
//       birthYear: 1948,
//       name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
//   };
  
//   function getNamedBook(number) {
//     return books.find((elemento) => elemento.name.length === number);
//   }

//   console.log(getNamedBook(26));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

// const expectedResult = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: { name: 'Stephen King', birthYear: 1947 },
//       releaseYear: 1986,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//   ];
  
//   function booksOrderedByReleaseYearDesc() {
//     return books.sort((a, b) => b.releaseYear - a.releaseYear);
//   }

//   console.log(booksOrderedByReleaseYearDesc());


//   5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

  const expectedResult = false;

  function everyoneWasBornOnSecXX() {
    return books.every((elemento) => elemento.author.birthYear > 1900 && elemento.author.birthYear < 2001)
  }

//   console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

// const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((elemento) => elemento.releaseYear > 1980 && elemento.releaseYear < 1989);
}
// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

// const expectedResult = false;
const rest = books.some((book) => );
const result = 

console.log(rest);







// const rest = books.some((book) => books.some((book2) => {
//   if(book.name !== book2.name) {
//     if(book.author.birthYear === book2.author.birthYear) {
//       console.log('entrou aqui');
//       return false;
//     }
//       return true
//   }
// }))

