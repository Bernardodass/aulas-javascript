'use strict';

// seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const video = document.querySelector("video");

// criando um objeto de aúdi referenciando o arquivo
const efeitosonoro = new Audio();
efeitosonoro.src = "wow.wav";


// criando um objeto de imagem referenciando o arquivo
const imagem = new Image();
imagem.src = "meme.gif"; // ou wow.gif




/* criando um Ouvinte de Evento (Event Listener)
O primeiro parâmetro de addEventListener é o tipo de evento que queremos "ouvir/monitorar". O segundo parâmetro é uma função (conhecida como callback) responsável por execultar ações no momento em que o evento acontecer. */
exemplo01.addEventListener("click", function () {

    // exibindo um texto no parágrafo mensagem
    mensagem.textContent = "Beleza✌";

    // ativando uma classe para o mensagem
    mensagem.classList.add("destaque");

    // modificando a fonte do body
    pagina.style.fontFamily = "Arial";

    // executando o áudio
    efeitosonoro.play();

    // inserindo a imagem após o parágrafo da mensagem
    mensagem.insertAdjacentElement("afterend", imagem);

    // remover o atributo hidden (isso fará o video aparecer)
    video.removeAttribute("hidden");
    video.play(); // reproduzir o vídeo
});

/* exemplo MODO NOTURNO */
const divcontainer = document.querySelector(".container");
const botao = document.querySelector("#noturno");

botao.addEventListener("click", function(){
    // usamos toggle para alternar entre os estados da classe (aplicada e não aplicada)
    pagina.classList.toggle("noturno");
    divcontainer.classList.toggle("noturno");

    /* DESAFIOS!! */

    /* 1) aplicar um efeito de mudança de cores suave*/
    
   /* 2) fazer o botao mudar de texto, ou seja, inicia com o texto "ativar* e troca para texto "desativar" conforme o que estiver acontecendo. */


    if(botao.textContent === "Ativar"){
        botao.textContent = "Desativar"
    }
    else {
        botao.textContent = "Ativar"
    }

    divcontainer.style.transition = "1s"
    
});
