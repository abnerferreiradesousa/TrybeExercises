const whatNumberIs = (num) => {
  const numConverted = Number(num);
  console.log(numConverted);
  if(numConverted > 0) return 'positivo';
  if(numConverted === 0) return 'neutro';
  if(numConverted < 0) return 'negativo';
  return 'o valor deve ser um número'
};

var camper = "James";
var camper = "David";
console.log(camper);
 
module.exports = whatNumberIs;