'use scrict'

// requisitos para aprovação
const mediaminima = 7;
const limitedefaltas = 10;

// aluno de exemplo
let aluno = "dayane";
let mediafinal = 10;
let faltas = 10;
let resultado;

// operador E (AND &&)
if (mediafinal >= mediaminima && faltas <= limitedefaltas) {
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}
console.log(resultado);
console.log(`${mediafinal} ${resultado} foi bem`);

console.log(`------------------`);

let idade = 14;

// operador OU/OR (||)     obs: o símbolo "|" é chamado de PIPE
if (idade >= 18 || idade < 12) {
    console.log("você é um adulto ou criança");
} else {
    console.log("você é um adolescente");
}

console.log("------------------");

let onibus = 2203; // 2203 ou 2019
if (onibus == 2203 || onibus == 2019) {
    console.log("passa no senac, embarque!");
} else {
    console.log("não passa no senac, aguarde!");
}