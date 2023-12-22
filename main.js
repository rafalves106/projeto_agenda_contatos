const nomes = []
const numeros = []

let linhas = '';

// Cancela funcionamento padrão do formulário

let form = document.getElementById('form-add')
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaAgenda()
})

// Função que cria uma linha a cada contato novo e cancela a ação caso exista um mesmo número

function adicionaLinha(){
    const nomeContato = document.getElementById('name');
    const numeroContato = document.getElementById('number');

    if (numeros.includes(numeroContato.value)) {
        alert('Já existe um contato com o mesmo número!')
    } else {
        numeros.push(numeroContato.value);
        nomes.push(nomeContato.value);

        const numeroFormatado = formatarNumero(numeroContato.value);

        let linha = '<tr>'
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroFormatado}</td>`;
        linha += '</tr>'
    
        linhas += linha;
    }

    nomeContato.value = '';
    numeroContato.value = '';
}

// Função que atualiza a agenda com as adições que for feitas pelo formulário

function atualizaAgenda(){
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}

// Função que formata o numero adicionado

function formatarNumero(numero) {
    const numeroLimpo = numero.replace(/\D/g, '');
    return `(${numeroLimpo.substring(0, 2)}) ${numeroLimpo.substring(2, 7)}-${numeroLimpo.substring(7)}`;
}

$(document).ready(function() {
    $('.add-contact').hide()
    $('#btn-toggle').click(function() {
        $(this).toggleClass('rotacionando');
        $('.add-contact').slideToggle();
    });
});