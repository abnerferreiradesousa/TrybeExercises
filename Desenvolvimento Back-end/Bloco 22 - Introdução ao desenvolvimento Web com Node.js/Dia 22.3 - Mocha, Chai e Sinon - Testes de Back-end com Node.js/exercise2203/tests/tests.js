const whatNumberIs = require('./whatNumberIs');
const fs = require('fs');
const writeText = require('./writeText');
const { expect } = require("chai");

describe('leArquivo', () => {
  describe('Quando um numero é maior que 0 retorna', () => {
    const result = whatNumberIs(1);
      it('positivo', () => {
        expect(result).equals('positivo');
      });
      it('tipo string', () => {
        expect(result).a('string');
      });
  });

  describe('Quando um numero é menor que 0 retorna', () => {
    const result = whatNumberIs(-1);
      it('negativo', () => {
        expect(result).equals('negativo');
      });
      it('tipo string', () => {
        expect(result).a('string');
      });
  });

  describe('Quando um numero é igual a 0 retorna', () => {
    const result = whatNumberIs(0);
      it('neutro', () => {
        expect(result).equals('neutro');
      });
      it('tipo string', () => {
        expect(result).a('string');
      });
  });

  describe('Quando o parametro é um número do tipo string retorna', () => {
    const result = whatNumberIs("0");
      it('neutro', () => {
        expect(result).equals('neutro');
      });
      it('tipo string', () => {
        expect(result).a('string');
      });
  });
  // Esse teste está quebrando
  describe('Quando o parametro é um texto retorna', () => {
    const result = whatNumberIs("abner");
      it('o valor deve ser um número', () => {
        expect(result).equals('o valor deve ser um número');
      });
      it('tipo string', () => {
        expect(result).a('string');
      });
  });
});

describe('writText arquivo', () => {
  describe('Verifica se escreve no arquivo', () => {
    const result = writeText('file1', 'Deu bom!');
      it('positivo', () => {
        const text = fs.readFileSync('file1', 'utf8');
        expect(text).equals('Deu bom!');
      });
  });

  // Esse teste está quebrando
  describe('Quando o parametro é um texto retorna', () => {
    const result = writeText('file1', 'Deu bom!');
    it('texto sucesso', () => {
      expect(result).equals('Arquivo escrito com sucesso');
    });
  });
}); 