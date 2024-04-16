'use strict'


// declarando um array de alunos
const alunos = ["Wilian", "Vinicius", "Marli", "Duda", "Gabriel"];

// Exibindo a estrutura do array (somente no console)
console.log(alunos);

// acessando individualmente alguns alunos ATRAVÉS DO INDICE
console.log(alunos[1]); // Vinicius
console.log(alunos[3]); // Duda
console.log(alunos[0]); // Wilian

/* Mini-exercício (FAÇA AQUI MESMO!)

-Crie um novo array com o nome de 7 coisas que você gosta (artista, banda, música, livro...)

-Em seguida, mostre uma frase personalizada no console indicando o nome do segundo, do quinto e do sétimo elemento do array. */

const gostos = ["brigadeiro", "coxinha", "bolinha de queijo", "pao de queijo", "pao com manteiga", "croissaint", "pizza"];

console.log(`Eu gosto de ${gostos[1]}, ${gostos[4]} e ${gostos[6]}.`);

/* matriz (array com mais de uma dimensão)  */
const tecnologias = [

    ["HTML5", "CSS3", "JavaScript"],

    ["PHP", "Node.js", "SQL", "Python", "Firebase"]

];

console.log(tecnologias[0][1]); // CSS3