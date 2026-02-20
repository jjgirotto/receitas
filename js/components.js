document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="index.html">🍴 Minhas Receitas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="doces.html">Doces</a></li>
            <li class="nav-item"><a class="nav-link" href="panificacao.html">Panificação</a></li>
            <li class="nav-item"><a class="nav-link" href="bebidas.html">Bebidas</a></li>
            <li class="nav-item"><a class="nav-link" href="conversao.html">Conversão</a></li>
          </ul>
        </div>
      </div>
    </nav>
    `;
    
    const footerHTML = `
    <footer class="footer text-center p-3 mt-5">
      © 2026 - Meu Livro de Receitas
    </footer>
    `;

    document.getElementById("nav-placeholder").innerHTML = navHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;
});