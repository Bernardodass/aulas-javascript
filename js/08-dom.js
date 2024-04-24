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

const h2doback = document.querySelector(".back-end")
console.log(h2doback);

const h2editores = document.querySelector(".editores h2")
console.log(h2editores);