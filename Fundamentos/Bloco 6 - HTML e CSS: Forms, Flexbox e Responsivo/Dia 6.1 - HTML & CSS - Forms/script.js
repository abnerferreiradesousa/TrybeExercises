const state = document.getElementById("state");

console.log();
let listOfStates = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

for (let index = 0; index < listOfStates.length; index += 1) {
  const createOption = document.createElement('option');
  createOption.innerHTML = listOfStates[index];
  createOption.classList.add('state' + index);
  // console.log(createOption.classList);
  state.appendChild(createOption);
  
  
}
