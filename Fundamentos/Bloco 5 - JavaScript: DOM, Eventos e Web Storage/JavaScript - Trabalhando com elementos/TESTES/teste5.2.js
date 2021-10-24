let list = ["150 g de bacon picadinho",
"250 g de linguiça calabresa picadinha",
"1 xícara (café) de azeite",
"2 cebolas picadinhas",
"6 dentes de alho amassados",
"500 g de feijão cozido e escorrido",
"1 cubo de caldo de bacon",
"4 ovos fritos inteiros e picadinhos",
"cheiro-verde a gosto",
"1 e 1/2 colher de farinha de mandioca crua"];

//PEGANDO LUGAR ONDE A LISTA FICARÁ
let indredientList = document.querySelector(".ingredient-list");

for(let index = 0; index < list.length; index += 1) {
    //PEGANDO MINHA LISTA NA MINHA VARIÁVEL E PERCORRENDO ELA
    let getList = list[index];
    //PEGANDO CADA ITEM E COLOCANDO DENTRO DE UMA li
    let createList = document.createElement('li');
    createList.innerText = getList;
    //ADICIONANDO CADA ITEM AO HTML
    indredientList.appendChild(createList);
};


