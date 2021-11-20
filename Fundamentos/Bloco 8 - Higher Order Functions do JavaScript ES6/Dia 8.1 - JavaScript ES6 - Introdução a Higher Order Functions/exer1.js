// Para fixar

// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const showName = () => 'Acordando!!';
// console.log(showName()); 

const chamaCafe = () => 'Bora tomar café!!';
// console.log(chamaCafe()); 

const vaiDormir = () => 'Partiu dormir!!';
// console.log(vaiDormir());

const doingThings = (doit) => doit();

// console.log(doingThings(chamaCafe));

//

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const turnObj = (nomeCompleto) => {
  const email = `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`;
  return  { nome: nomeCompleto, email: email}
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  // console.log(newEmployees(turnObj));

  // 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

  const sortearNumero = (aposta) => {
    let number = (Math.random() * 100).toFixed()
    const checked = (aposta) => {
      if(number === aposta) {
        return 'Parabéns você ganhou';
      } {
        return 'Tente novamente';
      }
    }
  }



  console.log(sortearNumero(23)); 