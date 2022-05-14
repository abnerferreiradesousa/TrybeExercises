 const connection = require('../models/connection');

 const getCep = (cep) => {
   const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
   const [result] = connection.execute(query, [cep]);
   return result;
 }

 module.exports = {getCep};