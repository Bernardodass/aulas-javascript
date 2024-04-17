'use strict';

// declarando um objeto
const livro = {
    titulo: "Senhor dos Anéis", //propriedade : valor
    autor: "J.R.R. Tolkien",
    volumes: 3,
    ano: 1954,
    preco: 250.77
};

console.log(livro);

console.log(livro.titulo);
console.log(livro.autor);

console.log(
    `${livro.titulo} foi criado por ${livro.autor}`
);

/* mini-exercício (fazer aqui)*/

/* 1)crie um objeto chamado "carro" contentdo as seguintes características:

- marca (ex: fiat)
- modelo (ex: uno)
- ano de fabricação (ex: 1996)
- quantidade de portas (ex: 2)
- cor (ex: branca)
- lista de opcionais (ar-condicionado, vidros eletricos, alarme)

2) mostre a seguinte mensagem no console: 
o fiat uno fabricado em 1996 com 2 portas e com vidros elétricos, foi um famoso carro no Brasil*/

const pagani = {
    marca: "Pagani",
    modelo: "Huayra Imola",
    adf: 2020,
    qdp: 2,
    cor: "roxo",

    // propriedade como array
    opcionais: ["vidros eletricos", "ar-condicionado", "alarme"]
}

console.log(`O ${pagani.modelo} fabricado em ${pagani.adf} com ${pagani.qdp} e com ${pagani.opcionais[0]}, é um famoso carro na Arábia Saudita `);

// objeto array e outro objeto
const pessoa = {
    nome: "tukika navara",
    idade: 20,
    telefones: ["11-2135-0300", "11-96666-5555"],

    // propriedade como objeto
    medidasFisicas: {
    peso: 98,
    altura: 2.12
    }
}
console.log(
    `o ${pessoa.nome} tem ${pessoa.medidasFisicas.peso} e ${pessoa.medidasFisicas.altura}de altura. Contato: ${pessoa.telefones[1]}`
);