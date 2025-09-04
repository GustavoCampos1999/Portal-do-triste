document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page-conversor-rc');
    if (!page) return;

    const goldNeededInput = page.querySelector('#gold-needed');
    const rcPriceIngameInput = page.querySelector('#rc-price-ingame');
    const rcPriceRealInput = page.querySelector('#rc-price-real');
    const kkPriceRealInput = page.querySelector('#kk-price-real');
    const rcResultDiv = page.querySelector('#rc-result');

    function calculateTcConversion() {
        // 1. Limpa e converte todos os valores dos inputs para números
        const goldNeededInKk = parseFloat(goldNeededInput.value.replace(/\./g, '')) || 0;
        const rcPriceInGold = parseFloat(rcPriceIngameInput.value.replace(/\./g, '')) || 0;
        const rcPriceReal = parseFloat(rcPriceRealInput.value.replace(/\./g, '').replace(',', '.')) || 0;
        const kkPriceReal = parseFloat(kkPriceRealInput.value.replace(',', '.')) || 0;

        if (!goldNeededInKk || goldNeededInKk <= 0) {
            rcResultDiv.innerHTML = "Por favor, insira quanto gold (kk) você precisa.";
            return;
        }

        let resultHTML = '';

        if (rcPriceInGold > 0) {
            const goldNeeded = goldNeededInKk * 1000000;
            const exactTcNeeded = goldNeeded / rcPriceInGold;
            const bundlesNeeded = Math.ceil(exactTcNeeded / 25);
            const finalRcNeeded = bundlesNeeded * 25;

            resultHTML += `
                <div>Para obter <strong>${goldNeededInKk.toLocaleString('pt-BR')}kk</strong>, você precisará de:</div>
                <div style="margin-top: 8px;"><strong class="damage-value">${finalRcNeeded.toLocaleString('pt-BR')}</strong> Tibia Coins (TC)</div>
            `;

            if (rcPriceReal > 0 && kkPriceReal > 0) {
                // 2. Fórmulas de cálculo
                const costViaRc = (finalRcNeeded / 1000) * rcPriceReal;
                const costViaKk = goldNeededInKk * kkPriceReal;
                
                resultHTML += `<hr style="border-color: #4a3c28; margin: 15px 0;">`;
                resultHTML += `<div>Custo via TCs: <strong class="${costViaRc <= costViaKk ? 'cheaper-value' : 'expensive-value'}">R$ ${costViaRc.toFixed(2).replace('.', ',')}</strong></div>`;
                resultHTML += `<div style="margin-top: 5px;">Custo via KKs: <strong class="${costViaKk < costViaRc ? 'cheaper-value' : 'expensive-value'}">R$ ${costViaKk.toFixed(2).replace('.', ',')}</strong></div>`;
                
                // 3. Lógica de comparação corrigida
                if (costViaRc < costViaKk) {
                    resultHTML += `<p style="margin-top: 15px;"><strong class="cheaper-value">É mais barato comprar TCs e vender no jogo!</strong></p>`;
                } else if (costViaKk < costViaRc) {
                    resultHTML += `<p style="margin-top: 15px;"><strong class="cheaper-value">É mais barato comprar os kks diretamente!</strong></p>`;
                } else {
                    resultHTML += `<p style="margin-top: 15px;">Os custos são equivalentes.</p>`;
                }
            }
        } else {
            resultHTML = "Por favor, insira o preço do TC em gold.";
        }
        
        rcResultDiv.innerHTML = resultHTML;
    }

    // Adiciona os listeners para acionar o cálculo automaticamente
    const inputs = [goldNeededInput, rcPriceIngameInput, rcPriceRealInput, kkPriceRealInput];
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('input', calculateTcConversion);
        }
    });

    // Esconde o botão de calcular que não está sendo usado
    const calculateBtn = page.querySelector('#calculate-rc-btn');
    if (calculateBtn) {
        calculateBtn.style.display = 'none';
    }
    
    // Mensagem inicial
    rcResultDiv.innerHTML = 'Preencha os campos para calcular.';
});