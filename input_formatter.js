document.addEventListener('DOMContentLoaded', () => {

    /**
     * Formata um número inteiro com pontos como separador de milhar.
     */
    function formatInteger(value) {
        let digits = value.replace(/\D/g, '');
        if (digits === '') return '';
        return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    /**
     * Formata um valor como moeda, tratando a entrada como centavos.
     * A vírgula é inserida automaticamente. Ex: 070 -> 0,70
     */
    function formatPrice(value) {
        let digits = value.replace(/\D/g, '');
        if (!digits) return '';

        const number = parseFloat(digits) / 100;

        return number.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    // --- Aplica as máscaras aos campos de input ---
    const integerInputs = [
        document.getElementById('maxHp'),
        document.getElementById('maxMana'),
        document.getElementById('rc-price-ingame'),
        document.getElementById('gold-needed'),
        document.getElementById('rc-price-real')
    ];

    const priceInput = document.getElementById('kk-price-real');

    integerInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', (e) => {
                e.target.value = formatInteger(e.target.value);
            });
        }
    });

    if (priceInput) {
        priceInput.addEventListener('input', (e) => {
            const value = e.target.value;
            const digits = value.replace(/\D/g, '');

            // LÓGICA CORRIGIDA: Verifica se o usuário está apagando o conteúdo
            // e se o resultado disso é zero. Se sim, limpa o campo.
            if (e.inputType.includes('delete') && (!digits || parseFloat(digits) === 0)) {
                e.target.value = '';
                return;
            }

            e.target.value = formatPrice(value);
        });
    }
});