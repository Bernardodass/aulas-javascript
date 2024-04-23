'use strict';

// sintaxe 1: função anônima
const exemplo1 = function () {
    console.log("função anônima");
};

// chamando/invocando a função
exemplo1();

// sintaxe 2: função nomeada/declarada
function exemplo2() {
    console.log("função nomeada/declarada");
}

exemplo2();

// sintaxe 3: arrow function (função flecha/seta)
const exemplo3 = () => {
    console.log("arrow function");
};

exemplo3();

/* obs: funções (em qualquer sintaxe) também podem trabalhar com parâmetros/argumentos.

quando uma função precisa de valores/dados para algum tipo de proecssamento, ela recebe parâmetros/argumentos entre parênteses.

geralmente, ao término do processamento dos parâmetros, a função "retorna" para fora um resultado.*/

/* exemplos diversos */

// função parâmetros
function somar(valor1, valor2) {
    /* ao receber os valores (parâmetros), a função primeiro calcula e depois devolve o resultado. */
    return valor1 + valor2;
}


console.log(somar(10, 5));
console.log(somar(30, 123));
console.log(somar(8.9, 1231.54));


console.log("-------------");


/* função para formatação de valores monetários em reais */
let preco = 5000;
let desconto = preco * 0.10; // 10%
let precoFinal = preco - desconto;



function formatarvalor(valor) {
    return new Intl.NumberFormat("pt-br", {
        // estilo da moeda e a sigla da moeda que esta sendo utilizada no estilo
        style: "currency",
        currency: "BRL"
    }).format(valor);
}



console.log(`preço: ${formatarvalor(preco)}`);
console.log(`desconto: ${formatarvalor(desconto)}`);
console.log(`preço final: ${formatarvalor(precoFinal)}`);

console.log("-------------------");

/* sobre a sintaxe 3: arrow function
sintaxe moderna para funções no javascript, bastante usada em bibliotecas/frameworks como react, react native, angular, vue e etc.

a sintaxe geral é:

const alumnome = () => {};

no entanto, esta sintaxe pode ser simplificada em alguns casos. */

// versão 1
/* function dobra(valor){
    return valor*2;
} */

// versão 2 (arrow function)
/* const dobra = (valor) => {
    return valor*2;
}
 */

// versão 3 (arrow function com retorno implícito)
const dobra = valor => 
     valor * 2;
    // quando tem 1 parametro pode tirar/omitir os parenteses, chaves e a palavra return (no arrow function)
    
// chamada
console.log(dobra(10));
console.log(dobra(50));
console.log(dobra(132.26));

console.log("-------------");

// funções como métodos/comportamentos de Objetos
let pessoa = {
    nome: "fulano",
    idade: "25",
    verificaidade(){
        if(pessoa.idade>=18){
            return "maior"
        } else {
            return "menor"
        }
    }
}

console.log(pessoa.nome);
console.log(`é ${pessoa.verificaidade()}`);