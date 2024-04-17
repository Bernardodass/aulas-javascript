'use strict';

/* comandos utilizados em condicionais
if (se)
else (senão)
else if (senão se)
switch/case (escolha/caso) 

operadores relacionais: 
> maior que
< menor que
>= menor ou igual
>= maior ou igual
!= diferença
== igualdade                                  */

// condicional simples
let numero = 6;

if(numero > 5){
    console.log("mensagem exibida pois a condição é VERDADEIRA");
}

// condicional composta
let usuario = "Tukika Navara";
let idade = 17;

// variavel com proposito de guardar a palavra "maior" ou "menor"
let texto; // undefined/indefinida

if(idade>=18){
    texto = "maior";
 // console.log(`${usuario} é maior de idade.`);
} else {
    texto = "menor";
// console.log(`${usuario} é menor de idade.`);
}

console.log(`${usuario} é ${texto} de idade.`);

console.log("if/else usando ternário ?");
let texto2 = idade>=18 ? "maior" : "menor";

console.log(`${usuario} é ${texto2} de idade.`);

// aplicando o ternário direto dentro da template string
console.log(`${usuario} é ${idade >=18 ? "maior" : "menor"} de idade.`);

// condicional encadeada/sucessiva
let texto3;
if(idade>=60){
    texto3 = "idoso(a)";
} else if(idade>=18){
    texto3 = "adulto(a)";
} else {
    texto3 = "menor de idade";
}
console.log(`${usuario} tem ${idade} anos e é ${texto3}`);