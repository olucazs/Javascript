function escopo(){
    const formulario = document.getElementById('formulario');
    const data = document.getElementById('data');
    const pessoas = [];

    function showData(evento){
        evento.preventDefault();

        const nome = document.getElementById('nome');
        const idade = document.getElementById('idade');
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');

        pessoas.push({
            nome: nome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        });

        data.innerHTML += `<p>Nome: ${nome.value}, Idade: ${idade.value}, Peso:  ${peso.value} e altura: ${altura.value}</p>`
    }

    formulario.addEventListener('submit', showData);
}

escopo();