document.getElementById("puzzle-form").addEventListener('submit', function(event) {
    event.preventDefault(); 
    
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
        "Beatrice Silva",
        "João Pinto",
        "Evelyn Rocha"
    ];

    let mensagem = document.getElementById("mensagem");

    let acertou = respostas.length === corretos.length &&
                  respostas.every(nome => corretos.includes(nome));

    if (acertou) {
        mensagem.innerHTML = 'A erradicação não se faz com pressa. <br>Se a criatura nasceu de um ritual dividido em duas etapas, para extingui-la o mesmo esforço é imprescindível. <br>O próximo e último passo começa aqui: <a href="./Próximo desafio/index.html" target="_blank">Próximo desafio</a>';
        mensagem.style.color = '#ffffffff';
        mensagem.style.textAlign = 'center';
    } else {
        mensagem.innerHTML = 'Nomes errados trazem confusão. A criatura se fortalece na incerteza. <br>Tente novamente.';
        mensagem.style.color = '#ffffffff';
        mensagem.style.textAlign = 'center';
    }
});
