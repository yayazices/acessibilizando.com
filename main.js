document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("leitor").addEventListener("click", ativarLeitor);
    document.getElementById("contraste").addEventListener("click", toggleContraste);
    document.getElementById("libras").addEventListener("click", abrirLibras);
});

// Ativar leitor de tela (agora lê toda a página)
function ativarLeitor() {
    let texto = document.body.innerText;
    let synth = window.speechSynthesis;
    let voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "pt-BR";
    synth.speak(voz);
}

// Alternar alto contraste
function toggleContraste() {
    document.body.classList.toggle("contraste-alto");
}

// Abrir um vídeo de Libras (simulação)
function abrirLibras() {
    window.open("https://www.youtube.com/watch?v=b4B8V7nUF7g", "_blank");
}