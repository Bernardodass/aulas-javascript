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
if(mediafinal>=mediaminima && faltas<=limitedefaltas){
    resultado = "aprovado";         
} else {
    resultado = "reprovado";
}
console.log(resultado);
console.log(`${mediafinal} ${resultado} foi bem`);