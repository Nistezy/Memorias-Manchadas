let respostas = [
    prompt("Adivinhe jogador1").trim(),
    prompt("Adivinhe jogador2").trim(),
    prompt("Adivinhe jogador3").trim(),
    prompt("Adivinhe jogador4").trim(),
    prompt("Adivinhe jogador5").trim()
];

let corretos = [
    "Emmanuella Pinheiro",
    "Evandro Santos",
    "Emily Marques",
    "Eliseu Pinto",
    "Evelyn Rocha"
];
let mensagem = document.getElementById("mensagem");

let acertou = respostas.length === corretos.length &&
               respostas.every(nome => corretos.includes(nome));

if (acertou) {
    mensagem.innerHTML = 'Parabéns, você acertou todos os players! <br>Seu próximo desafio está aqui: <a href="https://example.com/next-challenge" target="_blank">Próximo desafio</a>';
    mensagem.style.color = '#ffffffff';
    mensagem.style.textAlign = 'center';
} else {
    mensagem.textContent = 'Tente de novo seu bastardo';
    mensagem.style.color = '#ffffffff';
    mensagem.style.textAlign = 'center';
}
