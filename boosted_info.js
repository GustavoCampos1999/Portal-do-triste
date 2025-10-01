document.addEventListener('DOMContentLoaded', () => {
    const creatureCard = document.getElementById('boosted-creature-card');
    const bossCard = document.getElementById('boosted-boss-card');
    const serverButtons = document.querySelectorAll('.server-btn');

    const boostedDataCache = {
        global: { creature: null, boss: null, fetched: false },
        rubinot: { creature: null, boss: null, fetched: false } 
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
            creatureCard.innerHTML = `<h3>Criatura Boostada</h3><div class="boosted-info"><img src="images/icon/loading.gif" alt="Carregando..." class="loading-image"><span class="boosted-name">Carregando...</span></div>`;
            bossCard.innerHTML = `<h3>Boss Boostado</h3><div class="boosted-info"><img src="images/icon/loading.gif" alt="Carregando..." class="loading-image"><span class="boosted-name">Carregando...</span></div>`;
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

            const boostedCreatureInfo = creaturesData.creatures?.boosted;
            if (boostedCreatureInfo) {
                const localMonsterData = window.allMonstersData.find(m => m.name.toLowerCase() === boostedCreatureInfo.name.toLowerCase());
                boostedDataCache.global.creature = localMonsterData || { name: boostedCreatureInfo.name, image_url: boostedCreatureInfo.image_url };
            }

            const boostedBossInfo = bossesData.boostable_bosses?.boosted;
            if (boostedBossInfo) {
                const localBossData = window.allBossesData.find(b => b.name.toLowerCase() === boostedBossInfo.name.toLowerCase());
                boostedDataCache.global.boss = localBossData || { name: boostedBossInfo.name, image_url: boostedBossInfo.image_url };
            }
        } catch (error) {
            console.error('Erro ao buscar dados de "Global":', error);
        } finally {
            boostedDataCache.global.fetched = true;
            displayBoostedInfo('global');
        }
    }

    async function fetchRubinotData() {
        if (boostedDataCache.rubinot.fetched) {
            displayBoostedInfo('rubinot');
            return;
        }
        displayBoostedInfo('rubinot');
        try {
            const response = await fetch('https://rubinot-backend.onrender.com/api/rubinot-boosted'); 
            const data = await response.json();
            if (data.error || (!data.creature && !data.boss)) throw new Error(data.error || 'Nenhum dado retornado pela API do Rubinot');

            if (data.creature) {
                const monsterData = window.allMonstersData.find(m => m.name.toLowerCase() === data.creature.toLowerCase());
                if (monsterData) boostedDataCache.rubinot.creature = monsterData;
            }
            if (data.boss) {
                const bossData = window.allBossesData.find(b => b.name.toLowerCase() === data.boss.toLowerCase());
                if (bossData) boostedDataCache.rubinot.boss = bossData;
            }
        } catch (error) {
            console.error('Erro ao buscar dados de "Rubinot":', error);
            boostedDataCache.rubinot.creature = 'Indisponível';
            boostedDataCache.rubinot.boss = 'Indisponível';
        } finally {
            boostedDataCache.rubinot.fetched = true;
            displayBoostedInfo('rubinot');
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
                fetchRubinotData();
            }
        });
    });

    fetchGlobalData();
});