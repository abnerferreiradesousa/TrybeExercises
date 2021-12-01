const { books } = require('./index');

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map


  
  function formatedBookNames() {
    return books.map(({ name: bookName, genre, author: { name: authorName}}) => `${bookName} - ${genre} - ${authorName}`)
  }

  console.log(formatedBookNames());

