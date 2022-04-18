const fs = require('fs');

const leArquivo = (nomeArquivo) => {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeArquivo, 'utf8');
    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
};

module.exports = leArquivo;