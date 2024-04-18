'use strict'

/* loops masi usados:
- while (enquanto)
- for (para) 

normalmente, os loops são controlados através de uma variável contadora ou de alguma condição lógica para que o loop seja interrompido. */ 

// loop WHILE
/* let contador = 1;
while(contador<=5){
    console.log("valor do contador: "+contador);
    contador++;
} */

// loop FOR
for(let i = 1; i<=10; i++){
    console.log("i vale: "+i);
}

/* obs: normalmente variaveis de controle de repetição sao chamadas de "i" "j" "k". */


// loop para acessar arrays
const alunos = ["chaves", "chapolin", "seu madruga", "tukika navara", "socabe rola"];

/* for(let i = 0; i< alunos.length; i++){
    console.log(alunos[i]);
} */

// loop exclusivo do JS para arrays: for/of
for(const aluno of alunos){
    console.log(aluno);
}

// loop exclusivo do JS para objetos: for/in
const livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://maujor.com",
    ano: 2016
};

console.log("--------------------");

for(const prop in livro){
    console.log(livro[prop]);
}
