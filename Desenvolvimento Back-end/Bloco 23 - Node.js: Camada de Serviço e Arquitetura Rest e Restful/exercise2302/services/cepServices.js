const cepModel = require('../models/cepModel');

const validate = async (cep) => {
  const regex = \d{5}-?\d{3};
  const validing = regex.test(cep);
  if(!validing) return { code: 400, message: 'Invalid cep' }
  const result = await cepModel.getCep(cep);
}

module.exports = {
  validate,
}