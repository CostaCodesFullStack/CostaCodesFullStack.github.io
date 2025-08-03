const button = document.getElementById("toggle-theme");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    //Muda o texto do botão
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Modo Claro";
    } else {
        button.textContent = "🌙 Modo Escuro";
    }
});