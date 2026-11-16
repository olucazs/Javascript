/*

function olamundo(){
    console.log("Olá, mundo!")
} // Exemplo de como criar uma função

olamundo() // Chama e executa a função

function saudacao(nome){
    console.log(`Boa noite, ${nome}!`)
}

saudacao('Lucas');
saudacao('Maria');
saudacao('João');



const nome = 'Alison';

function saudacao(nome){
    console.log(`Boa noite, ${nome}!`)
}

saudacao(nome);



function saudacao(){
    return `Boa noite, ${nome}!`;
}

let nome = prompt('Qual é seu nome?');

document.write(saudacao());

*/

function soma(a, b){
    return a + b;
}

let n1 = Number(prompt('Digite um número:'));
let n2 = Number(prompt('Digite outro número:'));
let resultado = soma(n1, n2);
document.write(`A soma de ${n1} e ${n2} é ${resultado}`);
