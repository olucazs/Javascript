let num1 = 9.54628;
let numFloor = Math.floor(num1) // Arrendonda pra baixo num1 = 9;
console.log(numFloor)

let numCeil = Math.ceil(num1) // Arredonda pra cima num1 = 10;
console.log(numCeil)

let numRound = Math.round(num1) // Arredonda para o inteiro mais próximo num1 = 10;
console.log(numRound)

const notas = [6, 7, 5, 9];
console.log(Math.max(...notas)) // Retorna a maior nota do array = 10;

console.log(Math.min(...notas)) // Retorna a menor nota do array = 5;

console.log(Math.random()) // Retorna um número aleatório entre 0 e 1;