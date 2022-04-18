const fs = require('fs');

const writeText = (nomeArquivo, text) => {
  fs.writeFileSync(nomeArquivo, text);
  return 'Arquivo escrito com sucesso';
}

module.exports = writeText;