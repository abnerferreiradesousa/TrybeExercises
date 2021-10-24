const header = document.getElementById("header-container");
header.style.backgroundColor = "green";
//h3[0]
const h3List = document.getElementsByTagName("h3");
h3List[0].style.backgroundColor = "purple";
//h3[1]
h3List[1].style.backgroundColor = "purple";

//no-emer...
const noEmertasks = document.querySelectorAll(".no-emergency-tasks h3");

//no-emergency-tasks h3 backgroundColor
for (let index = 0; index < noEmertasks.length; index += 1) {
    noEmertasks[index].style.backgroundColor = "black";
}

//cor de fundo do emergency-tasks
const emerTasks = document.getElementsByClassName("emergency-tasks");
emerTasks[0].style.backgroundColor = "pink";

//cor de fundo do no-emergency-tasks
const corDeFundoNoEmer = document.getElementsByClassName("no-emergency-tasks");

corDeFundoNoEmer[0].style.backgroundColor = "yellow"

//rodapé
const rodape = document.querySelector("#footer-container");
rodape.style.backgroundColor = "darkslategrey"

