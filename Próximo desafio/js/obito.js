document.getElementById("puzzle-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let respostas = {
        nome: document.getElementById("Invocador").value.trim(),
        falecida: document.getElementById("Falecida").value.trim(),
        data: document.getElementById("Data_Falecimento").value.trim() 
    };

    let nome_correto = "Marco Polo";
    
    let falecida_correta = [
        "MARI AURÉLIO BENTO", 
        "MARI", 
        "TRAZER MARI AURÉLIO DE VOLTA", 
        "TRAZER MARI", 
        "TRAZER MARI AURÉLIO BENTO"
    ];

    let data_correta = "2025-12-05";

    let nomeAcertou = respostas.nome.toUpperCase() === nome_correto.toUpperCase();
    
    let falecidaAcertou = falecida_correta.includes(respostas.falecida.toUpperCase());
    
    let dataAcertou = respostas.data === data_correta;

    let acertou = nomeAcertou && falecidaAcertou && dataAcertou;

    let mensagemElemento = document.getElementById('mensagem');
    
    if (acertou) {
        mensagemElemento.innerHTML = 'A névoa mental se dissipa. Recordações vívidas trazem uma coerência brutal à realidade.<br>Seu prêmio: <a href="assets/Prêmio.jpg" target="_blank">Prêmio</a>';
        mensagemElemento.style.color = "#ffffff";
        mensagemElemento.style.textAlign = "center";
    } else {
        mensagemElemento.innerHTML = "Definir mal semeia discórdia. O inominável ganha poder na ausência de certeza. <br>Tente novamente";
        mensagemElemento.style.color = "#ffffff";
        mensagemElemento.style.textAlign = "center";
    }
});