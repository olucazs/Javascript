const pessoa0 = {
    nome: 'Lucas',
    sobrenome: 'Silva De Lima',
    idade: 20
}

//console.log(pessoa0.nome);
//console.log(pessoa0.sobrenome);
//console.log(pessoa0.idade);

/*

function login(nome, sobrenome, email){
    return{
        nome: nome,
        sobrenome: sobrenome,
        email: email
    }
}

const pessoa1 = login('Lucas', 'Silva De Lima', 'lucas@example.com');
const pessoa2 = login('Maria', 'Oliveira', 'maria@example.com');
const pessoa3 = login('João', 'Souza', 'joao@example.com');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

*/

const pessoa1 = {
    nome: 'Luissa',
    sobrenome: 'Vitória',
    idade: 26,

    fala(){
        console.log(`${this.nome} ${this.sobrenome}, está dizendo: Olá, mundo!`)
    }
}

pessoa1.fala();