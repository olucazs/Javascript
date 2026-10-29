const nome = "Yasmin";
const sobrenome = "Camargo";
const idade = 18;
const peso = 56;
const altura = 1.52;
let imc = peso / (altura*altura);
console.log(`O índice de massa corporal de ${nome} ${sobrenome} é: ${imc.toFixed(2)}`);