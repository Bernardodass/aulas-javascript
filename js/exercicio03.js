'use strict'

// Função para converter de reais para dólares
function convertermoeda(valoremreais, taxadecambio) {
    return valoremreais * taxadecambio;
}

// Exemplo de uso da função
let valoremreais = 4; 
let taxadecambio = 5.15;
let valoremdolares = convertermoeda(valoremreais, taxadecambio);

console.log("R$" + valoremreais + " equivalem a $" + valoremdolares.toFixed(2));