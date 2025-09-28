// A nova lógica será acionada pelo evento de envio do formulário
document.getElementById("puzzle-form").addEventListener('submit', function(event) {
    // 1. Previne o comportamento padrão de envio do formulário
    event.preventDefault(); 
    
    // 2. Coleta os valores dos campos de input
    let respostas = [
        document.getElementById("vitima1").value.trim(),
        document.getElementById("vitima2").value.trim(),
        document.getElementById("vitima3").value.trim(),
        document.getElementById("vitima4").value.trim(),
        document.getElementById("vitima5").value.trim()
    ];

    let corretos = [
        "Emmanuella Pinheiro",
        "Evandro Santos",
        "Emily Marques",
        "Eliseu Pinto",
        "Evelyn Rocha"
    ];
    
    let mensagem = document.getElementById("mensagem");

    // 3. Verifica as respostas (lógica original)
    // Aqui, em vez de verificar se o array é idêntico, vamos verificar se as respostas
    // contêm todos os nomes corretos (assumindo que a ordem não importa, como no seu JS original)
    let acertou = respostas.length === corretos.length &&
                  respostas.every(nome => corretos.includes(nome));

    // 4. Exibe a mensagem estilizada
    if (acertou) {
        mensagem.innerHTML = 'A erradicação não se faz com pressa. <br>Se a criatura nasceu de um ritual dividido em duas etapas, para extingui-la o mesmo esforço é imprescindível. <br>O próximo e último passo começa aqui: <a href="https://example.com/next-challenge" target="_blank">Próximo desafio</a>';
        mensagem.style.color = '#ffffffff'; // Cor do texto da mensagem (já definida no CSS, mas mantida por segurança)
        mensagem.style.textAlign = 'center';
    } else {
        mensagem.textContent = 'Nomes errados trazem confusão. A criatura se fortalece na incerteza. <br>Tente novamente.';
        mensagem.style.color = '#ffffffff';
        mensagem.style.textAlign = 'center';
    }
});