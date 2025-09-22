let players = [
  prompt("Adivinhe jogador1"),
  prompt("Adivinhe jogador2"),
  prompt("Adivinhe jogador3"),
  prompt("Adivinhe jogador4"),
  prompt("Adivinhe jogador5")
];

let corretos = [
  "Emmanuella Pinheiro",
  "Evandro Santos",
  "Emily Marques",
  "Eliseu Pinto",
  "Evelyn Rocha"
];

// Verifica se todos os nomes corretos estão dentro das respostas
let acertou = corretos.every(nome => respostas.includes(nome));

if (acertou) {
  document.write("Parabéns continue sua jornada");
} else {
  document.write("Tente de novo seu bastardo");
}
