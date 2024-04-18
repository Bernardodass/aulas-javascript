'use strict';

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