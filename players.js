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

let acertou = respostas.length === corretos.length &&
               respostas.every(nome => corretos.includes(nome));

if (acertou) {
    document.write("Parabéns continue sua jornada");
} else {
    document.write("Tente de novo seu bastardo");
}
