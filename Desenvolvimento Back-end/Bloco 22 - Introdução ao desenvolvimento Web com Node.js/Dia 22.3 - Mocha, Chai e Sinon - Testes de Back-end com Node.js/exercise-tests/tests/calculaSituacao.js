const { expect } = require('chai');
const calculaSituacao = require('../calculaSituacao');

describe('Quando a média for maior que 7', () => {
  it('retorna "aprovado"', () => {
    const result = calculaSituacao(9);
    expect(result).equals('aprovado');
  })
})

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const result = calculaSituacao(4);
    expect(result).equals('reprovado');
  })
})

describe('Quando a média for igual a 7', () => {
  it('retorna "aprovado"', () => {
    const result = calculaSituacao(7);
    expect(result).equals('aprovado');
  })
})