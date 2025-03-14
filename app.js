const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const mensagemErro = document.getElementById('mensagemErro')

let amigos = [];
let nome = '';

function limparCampo() {
    inputAmigo.value = '';
}

function adicionarAmigo() {
    nome = inputAmigo.value.trim();

    if (nome === ""){
        mensagemErro.innerHTML = 'Por favor digite um nome!';
        return;
    }

    amigos.push(nome);
    limparCampo();
    atualizarLista();
    mensagemErro.innerHTML = '';
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
        mensagemErro.innerHTML = 'Adicione pelo menos 2 amigos para que o sorteio seja realizado!';
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

    amigos = [];
    atualizarLista();
}