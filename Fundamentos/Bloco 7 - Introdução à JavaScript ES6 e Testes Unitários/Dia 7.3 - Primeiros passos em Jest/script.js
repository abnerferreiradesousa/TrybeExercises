const assert = require('assert'); // Sintaxe para incluir o módulo assert
const { log } = require('console');

console.log(assert.strictEqual(50, 50)); // Sem erros: 50 === 50
// assert.strictEqual(50, 70); // AssertionError: 50 !== 70