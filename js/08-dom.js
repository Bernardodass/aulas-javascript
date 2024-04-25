'use strict';

/* funções/métodos mais comuns para seleção de elementos no DOM

-getElementById()
Selecionar UM ELEMENTO através do atributo ID

-querySelector()
Seleciona UM ELEMENTO através de seletor baseado na lógica CSS

-querySelectorALL()
Seleciona VARIOS ELEMENTOS através de seletor(es) baseado na lógica CSS

*/

// exemplo 1: getElementById()
document.getElementById("legenda");
console.log(legenda);

// exemplo 2: querySelector()
const titulo = document.querySelector("h1");
console.log(titulo);

const sobrefront = document.querySelector("#sobre");
console.log(sobrefront); // por ID

/* mini-exercícios
1) faça o acesso/seleção do h2 de back-end e mostre no console.

2) faça o acesso/seleção apenas do h2 existente dentro da div com a classe 'editores' e mostre no console. */

const h2doback = document.querySelector(".back-end");
console.log(h2doback);

const h2editores = document.querySelector(".editores h2");
console.log(h2editores);

// exeplo 3: querySelectorALL()    -obs: funciona parecido com array
const subtitulos = document.querySelectorAll("h2")
console.log(subtitulos);

const varioselementos = document.querySelectorAll("p, a")
console.log(varioselementos);

/* modificando o DOM:
- podemos alterar conteúdo, tags, estilos, criar elementos, remover elementos etc */

// alteração de conteúdo textual
legenda.textContent = "imagem do modelo de objetos do documento";

// alteração de conteúdo com suporte à tags
sobrefront.innerHTML = "<i>front-end</i>";

// alteração de estilos inline (CSS in JS)
h2doback.style.color = "red";
h2doback.style.textAlign = "center";


// aplicação de classes CSS via javascript
titulo.classList.add("destaque");

const listadeeditores = [
    {
        nome: "visual studio code",
        finalidade: "desenvolvimento web em geral"
    },
    {
        nome: "android studio",
        finalidade: "desenvolvimento de aplicações android"
    },
    {
        nome: "xcode",
        finalidade: "desenvolvimento de aplicações iOS"
    }
];

// acessando a lista que será usada no HTML
const lista = document.querySelector(".lista");
console.log(lista);

/* percorrer (loop) o array de listadeeditores e criar os itens <li> com o conteúdo do array e adicioná-los à lista HTML. */

// for( variavel/constante de acesso- of -array com dados que queremos acessar)
for (const editor of listadeeditores) {
    // etapa 1: criar elemento <li>
    const item = document.createElement("li");

    // etapa 2: adicionar conteúdo ao novo elemento
    item.innerHTML = `<b>${editor.nome}</b>: ${editor.finalidade}`;

    // etapa 3: adicionar o elemento à lista <ol>
    lista.appendChild(item); // anexar/inserir filho
}


/* criando/configurando atributos HTML via JS */
const linksreferencia = document.querySelectorAll(".referencias a")
for(const link of linksreferencia) {
    link.setAttribute("target", "_blank"); // setar/colocar atributo
}

