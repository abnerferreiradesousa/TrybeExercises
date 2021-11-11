// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

  // const student1 = {
  //   Html: 'Muito Bom',
  //   Css: 'Bom',
  //   JavaScript: 'Ótimo',
  //   SoftSkills: 'Ótimo',
  // };
  
  // const student2 = {
  //   Html: 'Bom',
  //   Css: 'Ótimo',
  //   JavaScript: 'Ruim',
  //   SoftSkills: 'Ótimo',
  //   Git: 'Bom', // chave adicionada
  // };
  
  // const listSkills = (student) => {
  //   const arrayOfSkills = Object.keys(student);
  //   for(index in arrayOfSkills){
  //     // console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  //     console.log(student[arrayOfSkills[index]]);
  //   }
  // };

  
  // console.log('Estudante 1');
  // listSkills(student1);
  
  // console.log('Estudante 2');
  // listSkills(student2);
//COMEÇO - criando uma função que retorna as chaves e seus respectivos valores de um objeto.

// function pokemom (obtainObj) {
    
//     Object.keys(obtainObj).forEach(function(val, idx, array) { //busco nao só minhas chaves mas meus respectivos valores
//       console.log(val + ' -> ' + obtainObj[val]);
//     });
// }

// pokemom(coolestTvShow);
  
//FIM

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);


// //Adicionando uma propriedade ao objeto
// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
  
//   customer1.lastName = 'Abner';
//   console.log(customer1);

//   //Segunda forma de adicionar uma propriedade a um objeto
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

//OBJECT.VALUES - COMEÇO

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const key in coolestTvShow) {
//   console.log(coolestTvShow[key]);
// }

//USANDO O OBJECT.VALUES

// console.log(Object.values(coolestTvShow));

// var an_obj = { 'abner': 'a', 'pokemom': 'b', 'wende': 'c' };
// console.log(Object.values(an_obj)); // ['b', 'c', 'a'] //em alguns casos  object.values vai seguir a ordem enumerada nas propriedades do objeto.


// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// FIM

//object.entries - COMEÇO
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
países.Italia = 'Milão'
console.log(países.Espanha);
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

//FIM



// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }


//object.assign

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


// const person = {
//   name:'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({},person,lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);


