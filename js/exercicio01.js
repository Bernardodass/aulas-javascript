'use strict';

/* Crie um arquivo chamado exercicio01.html.

A partir dele, faça um script chamado exercicio01.js (não se esqueça de usar a pasta `js`).

1-Crie duas variáveis conforme a seguir:

-Nota 1 (contendo um valor de 0 a 10)

-Nota 2 (contendo outro valor de 0 a 10)


2-Crie uma variável chamada Média que receberá o valor CALCULADO da média aritmética das duas notas informadas.
Dica: você deve SOMAR as duas notas e DEPOIS dividir por 2.

3-Programe uma condicional que verifique o valor da média calculada conforme a seguinte lógica:

-Se a média for maior/igual a 7, mostre aprovado.

-Caso contrário, se a média for maior/igual a 5, mostre recuperação.

-Se não for nenhuma das condições anteriores, mostre reprovado. */

let nota1 = 7;
let nota2 = 7;

const media = (nota1 + nota2)/2;

if(media>=7){
    console.log(`aprovado`);
}
else if(media>=5){
    console.log(`recuperação`);
}
else{
    console.log(`reprovado`);
}

console.log(media);