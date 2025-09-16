document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page-calculadora');
    if (!page) return;

    const charmSelectionGrid = page.querySelector('#charm-selection-grid');
    const monsterSearchInput = page.querySelector('#monsterSearch');
    const searchResultsDiv = page.querySelector('#searchResults');
    const selectedMonsterDisplay = page.querySelector('#selectedMonsterDisplay');
    const clearSearchBtn = page.querySelector('#clearSearchBtn');
    const resultDiv = page.querySelector('#result');
    const modeIndividualBtn = page.querySelector('#mode-individual-btn');
    
    const allMonsters = window.allMonstersData || []; 
    if (allMonsters.length > 0) {
        monsterSearchInput.placeholder = "Digite para buscar um monstro...";
    } else {
        monsterSearchInput.placeholder = "Erro ao carregar monstros.";
        monsterSearchInput.disabled = true;
    }
    
    let currentMonsterData = null;

    function displayIndividualResults(data) {
        let html = '';
        const viableResults = data.viable || [];
        const inviableResults = data.inviable || [];
        resultDiv.classList.add('individual-result'); 
        if (viableResults.length > 0) {
            const bestOption = viableResults[0];
            const otherOptions = viableResults.slice(1);
            html += `<div class="recommendation-box highlight-best-option"> <p>Melhor Opção:</p><p><span class="charm-name">${bestOption.name}</span><span class="damage-value"> +${formatNumber(bestOption.bonusDamage)}</span></p></div>`;
            if (otherOptions.length > 0) {
                html += `<h4>Demais Opções (Ranking):</h4><ul class="ranking-list centered">`;
                otherOptions.forEach(result => { html += `<li><span class="charm-name">${result.name}</span><span class="damage-value">+${formatNumber(result.bonusDamage)}</span></li>`; });
                html += '</ul>';
            }
        }
        if (inviableResults.length > 0) {
            html += `<h4 style="margin-top: 20px;">Opções Inviáveis:</h4><ul class="ranking-list centered">`;
            inviableResults.forEach(result => { const lostDamage = result.potentialDamage - result.bonusDamage; html += `<li><span class="charm-name">${result.name}</span><span class="lost-damage-value">-${formatNumber(lostDamage)}</span></li>`; });
            html += '</ul>';
        }
        if(!html && currentMonsterData) { resultDiv.innerHTML = '<div style="text-align: center; color: #a0937d; padding-top: 5px;">Selecione os charms para analisar.</div>'; } 
        else { resultDiv.innerHTML = html; }
    }

    function generateResistancesHtml(monster) {
        if (!monster) return '';
        const elementOrder = ['physical', 'holy', 'death', 'earth', 'fire', 'ice', 'energy'];
        const elementIcons = {
            physical: 'images/elementos/Fisico.png', holy: 'images/elementos/Dazzled_Icon.gif', death: 'images/elementos/Cursed_Icon.gif',
            earth: 'images/elementos/Poisoned_Icon.gif', fire: 'images/elementos/Burning_Icon.gif', ice: 'images/elementos/Freezing_Icon.gif', energy: 'images/elementos/Electrified_Icon.gif'
        };
        const colorMap = { green: '#27ae60', yellow: '#f1c40f', red: '#c0392b', white: '#a0937d' };
        let resistanceItemsHtml = '';
        elementOrder.forEach(element => {
            const multiplier = getDamageMultiplier(element, monster);
            const percentage = Math.round(multiplier * 100);
            let color = colorMap.white;
            if (percentage >= 101) color = colorMap.green;
            else if (percentage >= 70 && percentage <= 99) color = colorMap.yellow;
            else if (percentage <= 69) color = colorMap.red;
            resistanceItemsHtml += `<div class="resistance-item"><img src="${elementIcons[element]}" title="${element}" alt="${element}"><div class="resistance-bar-container"><div class="resistance-bar" style="width: ${percentage}%; background-color: ${color};"></div><span>${percentage}%</span></div></div>`;
        });
        return `<fieldset class="resistance-fieldset"><legend>Resistências</legend><div class="resistance-grid">${resistanceItemsHtml}</div></fieldset>`;
    }

    window.runIndividualAnalysis = function() {
        if (!modeIndividualBtn.classList.contains('active')) return;
        const playerStats = getPlayerStats();
        const selectedCharms = getSelectedCharms();
        if (!currentMonsterData) { resultDiv.innerHTML = ''; return; }
        if (selectedCharms.length === 0) { displayIndividualResults({ viable: [], inviable: [] }); return; }
        const selectedNames = selectedCharms.map(c => c.name);
        
    const levelInput = page.querySelector('#level');
    const skillInput = page.querySelector('#skillLevel');
    const hpInput = page.querySelector('#maxHp');
    const manaInput = page.querySelector('#maxMana');

    [levelInput, skillInput, hpInput, manaInput].forEach(el => el.classList.remove('input-error'));

    const optionalMissing = [];
    const hasElementalCharm = selectedNames.some(name => ["Curse", "Divine Wrath", "Enflame", "Freeze", "Poison", "Wound", "Zap"].includes(name));
    
    if (hasElementalCharm && playerStats.level <= 0) {
      optionalMissing.push("Para calcular charms elementais, preencha o <b>Level</b>");
      levelInput.classList.add('input-error');
    }
    if ((selectedNames.includes('Low Blow') || selectedNames.includes('Savage Blow')) && playerStats.skill <= 0) {
      optionalMissing.push("Para calcular charms de crítico, preencha o <b>Skill</b>");
      skillInput.classList.add('input-error');
    }
    if (selectedNames.includes('Overpower') && playerStats.hp <= 0) {
      optionalMissing.push("Para calcular <b>Overpower</b>, preencha o <b>Max HP</b>");
      hpInput.classList.add('input-error');
    }
    if (selectedNames.includes('Overflux') && playerStats.mana <= 0) {
      optionalMissing.push("Para calcular <b>Overflux</b>, preencha a <b>Max Mana</b>");
      manaInput.classList.add('input-error');
    }
    
    if (optionalMissing.length > 0) { resultDiv.innerHTML = `<div style="text-align: center; color: #a0937d; padding-top: 5px;">${optionalMissing.join('<br>')}</div>`; return; }
        const viableResults = [];
        const inviableResults = [];
        selectedCharms.forEach(charm => {
            const bonusDamage = calculateBonusDamage(charm, charm.tier, currentMonsterData, playerStats);
            const result = { name: charm.name, bonusDamage: bonusDamage };
            if (charm.data.type === 'elemental_hp') {
                const multiplier = getDamageMultiplier(charm.data.element, currentMonsterData);
                if (multiplier < 0.3) {
                    result.potentialDamage = calculateBonusDamage(charm, charm.tier, currentMonsterData, playerStats, true);
                    inviableResults.push(result);
                } else { viableResults.push(result); }
            } else { viableResults.push(result); }
        });
        viableResults.sort((a, b) => b.bonusDamage - a.bonusDamage);
        inviableResults.sort((a, b) => (b.potentialDamage - b.bonusDamage) - (a.potentialDamage - a.bonusDamage));
        displayIndividualResults({ viable: viableResults, inviable: inviableResults });
    }
    
    function selectMonster(name) {
        monsterSearchInput.value = name;
        searchResultsDiv.style.display = 'none';
        currentMonsterData = allMonsters.find(m => m.name.toLowerCase() === name.toLowerCase());
        if (currentMonsterData) {
            const resistancesHTML = generateResistancesHtml(currentMonsterData);
            selectedMonsterDisplay.innerHTML = `<img id="selectedMonsterImage" src="${currentMonsterData.image_url}" alt="${currentMonsterData.name}"><h3 id="selectedMonsterName">${currentMonsterData.name}</h3>${resistancesHTML}`;
            selectedMonsterDisplay.style.display = 'flex';
            clearSearchBtn.style.display = 'block';
        }
        runIndividualAnalysis();
        setTimeout(() => { resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }

    window.resetSelection = function() {
        monsterSearchInput.value = '';
        currentMonsterData = null;
        selectedMonsterDisplay.style.display = 'none';
        clearSearchBtn.style.display = 'none';
        searchResultsDiv.style.display = 'none';
        runIndividualAnalysis(); 
    }

    monsterSearchInput.addEventListener('keydown', (e) => {
        if (currentMonsterData && e.key !== 'Tab') {
            resetSelection();
        }
    });

    monsterSearchInput.addEventListener('input', () => {
        const query = monsterSearchInput.value.toLowerCase();
        searchResultsDiv.innerHTML = '';
        if (!query) { searchResultsDiv.style.display = 'none'; return; }
        const filtered = allMonsters.filter(m => m.name.toLowerCase().includes(query) && m.hp > 0);
        filtered.slice(0, 50).forEach(monster => {
            const monsterDiv = document.createElement('div');
            monsterDiv.innerHTML = `<img src="${monster.image_url}" alt="${monster.name}"> ${monster.name}`;
            monsterDiv.onclick = () => selectMonster(monster.name);
            searchResultsDiv.appendChild(monsterDiv);
        });
        searchResultsDiv.style.display = 'block';
    });
    
    clearSearchBtn.addEventListener('click', resetSelection);
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) { searchResultsDiv.style.display = 'none'; }
    });
});