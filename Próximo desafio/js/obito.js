document.getElementById("puzzle-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let respostas = {
        nome: document.getElementById("Falecido").value.trim(),
        data: document.getElementById("Data_Falecimento").value.trim() 
    };

    let nome_correto = "Polo Aurélio Bento";
    let data_correta = "2025-12-05";

    let nomeAcertou = respostas.nome.toUpperCase() === nome_correto.toUpperCase();
    let dataAcertou = respostas.data === data_correta;

    let acertou = nomeAcertou && dataAcertou;

    let mensagemElemento = document.getElementById('mensagem');
    
    if (acertou) {
        mensagemElemento.innerHTML = 'A névoa mental se dissipa. Recordações vívidas trazem uma coerência brutal à realidade.<br>Seu prêmio: <a href="assets/Prêmio.jpg" target="_blank">Prêmio</a>';
        mensagemElemento.style.color = "ffffff";
	mensagem.style.textAlign = "center"
    } else {
        mensagemElemento.innerHTML = "Definir mal semeia discórdia. O inominável ganha poder na ausência de certeza. <br>Tente novamente";
        mensagemElemento.style.color = "#ffffff";
	mensgem.style.texAlign = "center"
    }
});
