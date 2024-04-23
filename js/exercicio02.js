'use strict'

/* Crie um arquivo chamado exercicio02.html.

1-A partir dele, faça um script chamado exercicio02.js (não se esqueça de usar a pasta js).

2-Crie um array de Clientes contendo 3 objetos. Cada objeto deve ter um identificador (1, 2 e 3) e o nome do cliente (Goku, Naruto, Shiryu).

3-Faça um loop (qualquer um dos que vimos) e mostre no console os dados de Cliente conforme a seguir:

Cliente: Goku (id: 1)
Cliente: Naruto (id: 2)
Cliente: Shiryu (id: 3) 
*/


const clientes = [
    { id: 1, nome: "Goku" },
    { id: 2, nome: "Saitama" },
    { id: 3, nome: "Luffy" }
];

// usando o FOR

/* for (let i = 0; i < clientes.length; i++) { 
    console.log(`cliente: ${clientes[i].nome} (id: ${clientes[i].id})`); 
} */

// usando o FOR/OF

for (const cliente of clientes) {
    console.log(`cliente: ${cliente.nome} (id: ${cliente.id})`);
}