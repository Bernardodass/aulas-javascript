/* Habilitando o modo estrito da linguagem. Ao fazer isso, a linguagem passa a analisar se você declarou variáveis e não está usando palavras-reservadas. Se isso acontecer, erros serão exibidos. */
'use strict';

// Comentário de APENAS uma linha ( CTRL ; )
/* Comentário de 
Múltiplas linhas ( SHIFT ALT A ) */

// Saída de dados
console.log("Hello World!")


/* Manipulação de dados */


// Variáveis (valores podem ser modificados)
let curso = "HTML e CSS3"; /* string, literal (entre aspas) */
let ano = 2024; /* números (inteiro/real), sem aspas */


// Váriavel sem valor definido
let disciplina = "lógica";
console.log(disciplina)


// Atribuindo valor APÓS declarar variável
disciplina = "Lógica";


// Constantes (valores fixos, não podem ser modificados)
const escola = "Senac Penha";

const materia = "Portguês";

console.log(curso)
console.log(ano)
console.log(escola);


let nomeDavariavel = "Algum valor"
console.log(nomeDavariavel);

/* Palavras-chave de uso reservado: public, implements, private, arguments */
let publica = "Palavra-reservada!";
console.log(publica);
// console-log(public)

/* Saída de dados personalizada */

/* Estou fazendo o curso de HTML5 e CSS3 no Senac Penha. */

// CONCATERAÇÃO (forma mais antiga/tradicional)
console.log("Estou fazendo o curso de " + curso + " no " + escola + ".");

// TEMPLATE LITERAL/STRING (forma mais moderna)
console.log(`Estou fazendo o curso de ${curso} no ${escola}.`);

let mensagem = `Estou fazendo o curso de ${curso} no ${escola}.`;

// Dando saída na frase já montada
console.log(mensagem);


/* Operações matemáticas básicas */
let valor1 = 10;
let valor2 = 5;
let valor3 = 1200.55;

// Operações
let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2
let divisao = valor1 / valor2

console.log("Soma " + soma);
console.log("Subtração " + subtracao);
console.log("Multiplicação " + multiplicacao);
console.log("Divisão " + divisao);