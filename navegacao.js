document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link:not(.disabled)');
    const pages = document.querySelectorAll('.page-content');

    // Funções para resetar cada ferramenta
    function resetCharmCalculator() {
        const form = document.getElementById('charm-calculator-form');
        if (form) {
            form.reset(); // Limpa todos os inputs (level, hp, mana, busca)

            // Esconde elementos que podem ter ficado visíveis
            document.querySelectorAll('.tier-selector.visible').forEach(ts => ts.classList.remove('visible'));
            
            const monsterDisplay = document.getElementById('selectedMonsterDisplay');
            if (monsterDisplay) monsterDisplay.style.display = 'none';

            // Limpa a caixa de resultado
            const resultDiv = document.getElementById('result');
            if (resultDiv) resultDiv.innerHTML = '';
            
            // Reseta as abas internas para o padrão
            document.getElementById('mode-individual-btn').classList.add('active');
            document.getElementById('mode-hunt-btn').classList.remove('active');
            document.getElementById('individual-analyzer').classList.remove('hidden');
            document.getElementById('hunt-analyzer').classList.add('hidden');
        }
    }

    function resetTcConverter() {
        const form = document.getElementById('tc-converter-form');
        if (form) {
            form.reset(); // Limpa todos os inputs

            // Limpa a caixa de resultado e coloca a mensagem inicial
            const resultDiv = document.getElementById('rc-result');
            if (resultDiv) resultDiv.innerHTML = 'Preencha os campos para calcular.';
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            // --- LÓGICA DE RESET ADICIONADA AQUI ---
            resetCharmCalculator();
            resetTcConverter();
            // -----------------------------------------

            const targetPageId = link.dataset.page;
            pages.forEach(page => page.classList.add('hidden'));
            const targetPage = document.getElementById(`page-${targetPageId}`);
            if (targetPage) targetPage.classList.remove('hidden');

            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});