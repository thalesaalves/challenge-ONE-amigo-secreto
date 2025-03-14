const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = [];
let nome = '';

function limparCampo() {
    inputAmigo.value = '';
}

function adicionarAmigo() {
    nome = inputAmigo.value.trim();

    if (nome === ""){
        alert('Por favor digite um nome!');
        return;
    }

    amigos.push(nome);
    limparCampo();
    atualizarLista();
}

function adicionarNomeLista(nome) {
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);
}

function atualizarLista() {
    listaAmigos.innerHTML = '';

    amigos.forEach(adicionarNomeLista);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para que o sorteio seja realizado!');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

    amigos = [];
    atualizarLista();
}