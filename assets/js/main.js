// Função melhorada com tratamento de erro
async function load(id, file) {
    try {
        const r = await fetch(file);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        document.getElementById(id).innerHTML = await r.text();
    } catch (erro) {
        console.error(`Erro ao carregar ${file}:`, erro);
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerHTML = `<div class="alert alert-danger m-3">⚠️ Não foi possível carregar o conteúdo: ${file}</div>`;
        }
    }
}

// Aguarda o DOM carregar completamente antes de tentar carregar os componentes
document.addEventListener('DOMContentLoaded', function () {
    // Verifica se os elementos existem antes de carregar
    if (document.getElementById('navbar')) load('navbar', 'assets/components/navbar.html');
    if (document.getElementById('footer')) load('footer', 'assets/components/footer.html');
});
