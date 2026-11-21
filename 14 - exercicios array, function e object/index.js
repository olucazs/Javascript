const formulario = document.getElementById('formulario')

function showData(){
    event.preventDefault();

    const pessoa = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value
    }

    document.getElementById('data').textContent = `Seus dados são: Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, peso: ${pessoa.peso} e por fim a sua altura: ${pessoa.altura} `
    
}

formulario.addEventListener('submit', showData);