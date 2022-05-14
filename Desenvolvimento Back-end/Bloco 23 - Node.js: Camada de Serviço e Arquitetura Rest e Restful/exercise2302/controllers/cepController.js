const cepServices = require('../services/cepServices');

const cepHandle = async (req, res) => {
  const { cep } = req.params;
  const result = await cepServices.validate(cep);
  return result;
}

module.exports = {
  cepHandle,
}