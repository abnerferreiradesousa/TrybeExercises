const fs = require('fs').promises;

fs.writeFile('./meu-novo-arquivo.txt', 'Meu textão', { flag:'wx' })
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });