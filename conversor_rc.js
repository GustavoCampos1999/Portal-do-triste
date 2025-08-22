// conversor_rc.js
document.addEventListener('DOMContentLoaded', () => {
    const calculateRcBtn = document.getElementById('calculate-rc-btn');
    if (!calculateRcBtn) return; // Só executa se o botão estiver na página

    const rcPriceIngameInput = document.getElementById('rc-price-ingame');
    const goldNeededInput = document.getElementById('gold-needed');
    const rcPriceRealInput = document.getElementById('rc-price-real');
    const kkPriceRealInput = document.getElementById('kk-price-real');
    const rcResultDiv = document.getElementById('rc-result');

    calculateRcBtn.addEventListener('click', () => {
        const rcPriceInGold = parseFloat(rcPriceIngameInput.value);
        const goldNeededInKk = parseFloat(goldNeededInput.value);
        
        const rcPriceReal = parseFloat(rcPriceRealInput.value);
        const kkPriceReal = parseFloat(kkPriceRealInput.value);

        if (!goldNeededInKk || goldNeededInKk <= 0) {
            rcResultDiv.innerHTML = "Por favor, insira quanto gold você precisa.";
            return;
        }

        let resultHTML = '';
        const goldNeeded = goldNeededInKk * 1000000;

        // --- LÓGICA DE CÁLCULO ATUALIZADA ---
        if (rcPriceInGold > 0) {
            // 1. Calcula a quantidade exata de RCs necessários.
            const exactRcNeeded = goldNeeded / rcPriceInGold;
            // 2. Calcula quantos "pacotes de 25" são necessários, arredondando para cima.
            const bundlesNeeded = Math.ceil(exactRcNeeded / 25);
            // 3. Calcula o total final de RCs com base nos pacotes.
            const finalRcNeeded = bundlesNeeded * 25;

            resultHTML += `
                <p>Para obter <strong>${goldNeededInKk.toLocaleString('pt-BR')}kk</strong>, você precisará comprar:<br>
                <strong class="damage-value">${finalRcNeeded.toLocaleString('pt-BR')}</strong> Rubinicoins (RC) no jogo.</p>
            `;

            // Lógica de comparação (só executa se ambos os campos opcionais forem preenchidos)
            if (rcPriceReal > 0 && kkPriceReal > 0) {
                const costViaRc = (finalRcNeeded / 1000) * rcPriceReal;
                const costViaKk = goldNeededInKk * kkPriceReal;
                
                resultHTML += `<hr style="border-color: #4a3c28; margin: 15px 0;">`;
                resultHTML += `<p>Custo via RCs: <strong class="${costViaRc <= costViaKk ? 'cheaper-value' : 'expensive-value'}">R$ ${costViaRc.toFixed(2).replace('.', ',')}</strong></p>`;
                resultHTML += `<p>Custo via KKs: <strong class="${costViaKk < costViaRc ? 'cheaper-value' : 'expensive-value'}">R$ ${costViaKk.toFixed(2).replace('.', ',')}</strong></p>`;
                
                if (costViaRc < costViaKk) {
                    resultHTML += `<p style="margin-top: 10px;">É <strong class="cheaper-value">mais barato</strong> comprar RCs e vender no jogo!</p>`;
                } else if (costViaKk < costViaRc) {
                    resultHTML += `<p style="margin-top: 10px;">É <strong class="cheaper-value">mais barato</strong> comprar os kks diretamente!</p>`;
                } else {
                     resultHTML += `<p style="margin-top: 10px;">Os custos são equivalentes.</p>`;
                }
            }
        } else {
             resultHTML = "Por favor, insira o preço do RC em gold.";
        }
        
        rcResultDiv.innerHTML = resultHTML;
    });
});