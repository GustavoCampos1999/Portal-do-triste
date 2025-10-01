document.addEventListener('DOMContentLoaded', () => {
    const creatureCard = document.getElementById('boosted-creature-card');
    const bossCard = document.getElementById('boosted-boss-card');
    const serverButtons = document.querySelectorAll('.server-btn');

    const boostedDataCache = {
        global: { creature: null, boss: null, fetched: false },
        rubinot: { creature: "EM BREVE!", boss: "EM BREVE!", fetched: true } 
    };

    function updateCard(cardElement, title, data) {
        if (data && typeof data === 'object' && data.image_url) {
            cardElement.innerHTML = `
                <h3>${title}</h3>
                <div class="boosted-info">
                    <img src="${data.image_url}" alt="${data.name}" class="boosted-image">
                    <span class="boosted-name">${data.name}</span>
                </div>`;
        } else if (data === "EM BREVE!") {
             cardElement.innerHTML = `<h3>${title}</h3><div class="boosted-info"><p class="coming-soon" style="font-size: 1em; opacity: 0.7;">EM BREVE!</p></div>`;
        } else {
            cardElement.innerHTML = `<h3>${title}</h3><div class="boosted-info"><p class="coming-soon">Não encontrado</p></div>`;
        }
    }

    function displayBoostedInfo(server) {
        const data = boostedDataCache[server];
        
        if (!data.fetched) {
            creatureCard.innerHTML = `<h3>Criatura Boostada</h3><div class="boosted-info"><img src="images/icon/loading.gif" alt="Carregando..." class="boosted-image"><span class="boosted-name">Carregando...</span></div>`;
            bossCard.innerHTML = `<h3>Boss Boostado</h3><div class="boosted-info"><img src="images/icon/loading.gif" alt="Carregando..." class="boosted-image"><span class="boosted-name">Carregando...</span></div>`;
        } else {
            updateCard(creatureCard, 'Criatura Boostada', data.creature);
            updateCard(bossCard, 'Boss Boostado', data.boss);
        }
    }

    async function fetchGlobalData() {
        if (boostedDataCache.global.fetched) {
            displayBoostedInfo('global');
            return;
        }

        displayBoostedInfo('global');

        try {
            const [creaturesResponse, bossesResponse] = await Promise.all([
                fetch('https://api.tibiadata.com/v4/creatures'),
                fetch('https://api.tibiadata.com/v4/boostablebosses')
            ]);

            if (!creaturesResponse.ok) throw new Error('Falha ao buscar dados das criaturas');
            if (!bossesResponse.ok) throw new Error('Falha ao buscar dados dos bosses');

            const creaturesData = await creaturesResponse.json();
            const bossesData = await bossesResponse.json();

            const creatureName = creaturesData.creatures?.boosted?.name;
            if (creatureName) {
                const localMonsterData = window.allMonstersData.find(m => m.name.toLowerCase() === creatureName.toLowerCase());
                
                if (localMonsterData) {
                    boostedDataCache.global.creature = localMonsterData;
                } else {
                    console.warn(`Criatura "${creatureName}" da API não encontrada na DB local.`);
                    boostedDataCache.global.creature = { name: creatureName, image_url: 'images/icon/favicon.png' };
                }
            }

            const bossName = bossesData.boostable_bosses?.boosted?.name;
            if (bossName) {
                const localBossData = window.allBossesData.find(b => b.name.toLowerCase() === bossName.toLowerCase());
                
                if (localBossData) {
                    boostedDataCache.global.boss = localBossData;
                } else {
                    console.warn(`Boss "${bossName}" da API não encontrado na DB local.`);
                    boostedDataCache.global.boss = { name: bossName, image_url: 'images/icon/favicon.png' };
                }
            }

        } catch (error) {
            console.error('Erro ao buscar dados de "Global":', error);
        } finally {
            boostedDataCache.global.fetched = true;
            displayBoostedInfo('global');
        }
    }

    serverButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) return;

            serverButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const server = button.dataset.server;

            if (server === 'global') {
                fetchGlobalData();
            } else {
                displayBoostedInfo('rubinot');
            }
        });
    });

    fetchGlobalData();
});