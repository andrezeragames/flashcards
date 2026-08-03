const curiosidades = [

{
pergunta:"Qual é o maior animal do planeta?",
resposta:"A baleia-azul pode chegar a mais de 30 metros de comprimento."
},

{
pergunta:"Quantos ossos tem um adulto?",
resposta:"206 ossos."
},

{
pergunta:"Qual planeta gira de lado?",
resposta:"Urano."
},

{
pergunta:"Qual é o deserto mais quente do mundo?",
resposta:"Deserto do Saara."
},

{
pergunta:"Qual país possui mais fusos horários?",
resposta:"A França, considerando seus territórios ultramarinos."
},

{
pergunta:"Qual é o metal líquido à temperatura ambiente?",
resposta:"Mercúrio."
},

{
pergunta:"Qual é o maior órgão do corpo humano?",
resposta:"A pele."
},

{
pergunta:"Qual é o oceano mais profundo?",
resposta:"O Oceano Pacífico."
},

{
pergunta:"Quanto tempo a luz do Sol leva para chegar à Terra?",
resposta:"Cerca de 8 minutos e 20 segundos."
},

{
pergunta:"Qual animal nunca dorme completamente?",
resposta:"Os golfinhos descansam apenas metade do cérebro por vez."
}

];

let indice = 0;

const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");

function carregar(){

pergunta.innerHTML = curiosidades[indice].pergunta;
resposta.innerHTML = curiosidades[indice].resposta;

}

carregar();

const card = document.getElementById("flashcard");

card.addEventListener("click",()=>{

card.classList.toggle("virado");

});

function proximoCard(){

card.classList.remove("virado");

indice++;

if(indice>=curiosidades.length){

indice=0;

}

setTimeout(carregar,300);

}
