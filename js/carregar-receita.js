document.addEventListener("DOMContentLoaded", function() {
    const parametros = new URLSearchParams(window.location.search);
    const idDaReceita = parametros.get("id");

    const receita = bancoDeReceitas[idDaReceita];

    if (receita) {
        const videoContainer = document.getElementById("rec-video-container");
        const videoIframe = document.getElementById("rec-video");
        if (receita.video) {
            videoIframe.src = receita.video;
            videoContainer.classList.remove("d-none");
        } else {
            videoContainer.classList.add("d-none");
        }
        document.getElementById("rec-titulo").innerText = receita.titulo;
        document.getElementById("rec-imagem").src = receita.imagem;
        document.getElementById("rec-tempo").innerText = receita.tempo;
        document.getElementById("rec-rendimento").innerText = receita.rendimento;
        document.getElementById("rec-dificuldade").innerText = receita.dificuldade;
        document.getElementById("rec-dica").innerHTML = `<strong>💡 Dica da Cozinha:</strong> ${receita.dica}`;

        const listaIngredientes = document.getElementById("rec-ingredientes");
        receita.ingredientes.forEach(ingrediente => {
            listaIngredientes.innerHTML += `<li class="list-group-item px-4 py-3"><input class="form-check-input me-2" type="checkbox"> ${ingrediente}</li>`;
        });

        const listaPreparo = document.getElementById("rec-preparo");
        receita.preparo.forEach(passo => {
            listaPreparo.innerHTML += `<li class="list-group-item px-4 py-3">${passo}</li>`;
        });

        document.title = receita.titulo + " - Minhas Receitas";

    } else {
        document.getElementById("area-receita").innerHTML = "<h2 class='text-center mt-5'>Receita não encontrada 😢</h2>";
    }
});