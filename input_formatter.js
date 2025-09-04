document.addEventListener('DOMContentLoaded', () => {

    function formatInteger(value) {
        let digits = value.replace(/\D/g, '');
        if (digits === '') return '';
        return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function formatPrice(value) {
        let digits = value.replace(/\D/g, '');
        if (!digits) return '';

        const number = parseFloat(digits) / 100;

        return number.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

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

            if (e.inputType.includes('delete') && (!digits || parseFloat(digits) === 0)) {
                e.target.value = '';
                return;
            }

            e.target.value = formatPrice(value);
        });
    }
});