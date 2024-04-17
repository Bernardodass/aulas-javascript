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
let idade = 23;

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