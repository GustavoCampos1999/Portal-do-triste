window.addEventListener('load', () => {

    const charmsData = {
        "Curse": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'death' },
        "Divine Wrath": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'holy' },
        "Enflame": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'fire' },
        "Freeze": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'ice' },
        "Poison": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'earth' },
        "Wound": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'physical' },
        "Zap": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'energy' },
        "Low Blow": { type: 'crit_chance', bonus: [4, 8, 9] },
        "Savage Blow": { type: 'crit_damage', bonus: [20, 40, 44] },
        "Overpower": { type: 'player_proc', chance: [5, 10, 11], damageMultiplier: 0.05, basis: 'hp' },
        "Overflux": { type: 'player_proc', chance: [5, 10, 11], damageMultiplier: 0.025, basis: 'mana' }
    };
    
    const page = document.getElementById('page-calculadora');
    if (!page) return;

    const charmSelectionGrid = page.querySelector('#charm-selection-grid');
    const monsterSearchInput = page.querySelector('#monsterSearch');
    const searchResultsDiv = page.querySelector('#searchResults');
    const selectedMonsterDisplay = page.querySelector('#selectedMonsterDisplay');
    const clearSearchBtn = page.querySelector('#clearSearchBtn');
    const resultDiv = page.querySelector('#result');
    const modeIndividualBtn = page.querySelector('#mode-individual-btn');
    
    const allMonsters = window.allMonstersData; 
    let currentMonsterData = null;

    function getPlayerStats() {
        const levelInput = page.querySelector('#level').value;
        const level = parseFloat(levelInput) || 0;
        const finalLevel = levelInput === '' ? 0 : level;
        const hpValue = page.querySelector('#maxHp').value.replace(/\./g, '');
        const manaValue = page.querySelector('#maxMana').value.replace(/\./g, '');

        return {
            hp: parseFloat(hpValue) || 0,
            mana: parseFloat(manaValue) || 0,
            level: finalLevel,
            baseDamage: (finalLevel > 0 ? (finalLevel * 2.5) + 50 : 0),
            baseCritChance: 0.10
        };
    }
    
    function getSelectedCharms() {
        const selected = [];
        const checkedBoxes = charmSelectionGrid.querySelectorAll('input[type="checkbox"]:checked');
        checkedBoxes.forEach(cb => {
            const charmItem = cb.closest('.charm-item');
            if (!charmItem) return;
            const activeTierButton = charmItem.querySelector('.tier-btn.active');
            selected.push({
                name: cb.value,
                tier: activeTierButton ? parseInt(activeTierButton.dataset.tier) : 0,
                data: charmsData[cb.value]
            });
        });
        return selected;
    }

    function getDamageMultiplier(element, monster) {
        if (!monster || !monster.damageTypes) return 1.0;
        const damageType = monster.damageTypes.find(dt => dt.type === element);
        return damageType ? damageType.multiplier : 1.0;
    }
    
    function calculateBonusDamage(charm, tier, monster, playerStats, ignoreResistance = false) {
        let bonusDamage = 0;
        const charmData = charm.data;
        if (!charmData) return 0;
        
        switch (charmData.type) {
            case 'elemental_hp': {
                const procChance = charmData.chance[tier] / 100;
                const baseProcDamage = monster.hp * charmData.damageMultiplier;
                const damageMultiplier = ignoreResistance ? 1.0 : getDamageMultiplier(charmData.element, monster);
                bonusDamage = procChance * (baseProcDamage * damageMultiplier);
                break;
            }
            case 'player_proc': {
                if ((charmData.basis === 'hp' && playerStats.hp <= 0) || (charmData.basis === 'mana' && playerStats.mana <= 0)) return 0;
                const procChancePlayer = charmData.chance[tier] / 100;
                const playerBasis = (charmData.basis === 'mana') ? playerStats.mana : playerStats.hp;
                const procCap = monster.hp * 0.08;
                const potentialDamage = playerBasis * charmData.damageMultiplier;
                const actualDamage = Math.min(potentialDamage, procCap);
                bonusDamage = procChancePlayer * actualDamage;
                break;
            }
            case 'crit_chance':
            case 'crit_damage': {
                if (playerStats.level <= 0) return 0;
                if (charmData.type === 'crit_chance') {
                    const critChanceBonus = charmData.bonus[tier] / 100;
                    bonusDamage = playerStats.baseDamage * critChanceBonus * 0.5;
                } else {
                    const critDamageBonus = charmData.bonus[tier] / 100;
                    bonusDamage = playerStats.baseDamage * playerStats.baseCritChance * critDamageBonus;
                }
                break;
            }
        }
        return bonusDamage < 0 ? 0 : bonusDamage;
    }

    function formatNumber(num) {
        if (num >= 1000) return (num / 1000).toFixed(1).replace('.', ',') + 'k';
        if (num < 10 && num > 0) return num.toFixed(2);
        return num.toFixed(0);
    }

    function displayIndividualResults(data) {
    let html = '';
    const viableResults = data.viable || [];
    const inviableResults = data.inviable || [];

    // Adiciona a classe individual-result aqui para isolar estilos
    resultDiv.classList.add('individual-result'); // Garante que a classe está sempre presente

    if (viableResults.length > 0) {
        const bestOption = viableResults[0];
        const otherOptions = viableResults.slice(1);

            html += `<div class="recommendation-box highlight-best-option"> <p>Melhor Opção:</p>
                <p>
                    <span class="charm-name">${bestOption.name}</span>
                    <span class="damage-value"> +${formatNumber(bestOption.bonusDamage)}</span>
                </p>
            </div>`;

        if (otherOptions.length > 0) {
            html += `<h4>Demais Opções (Ranking):</h4><ul class="ranking-list centered">`;
            otherOptions.forEach(result => {
                html += `<li><span class="charm-name">${result.name}</span><span class="damage-value">+${formatNumber(result.bonusDamage)}</span></li>`;
            });
            html += '</ul>';
        }
    }
        
        if (inviableResults.length > 0) {
            html += `<h4 style="margin-top: 20px;">Opções Inviáveis:</h4><ul class="ranking-list centered">`;
            inviableResults.forEach(result => {
                const lostDamage = result.potentialDamage - result.bonusDamage;
                html += `<li><span class="charm-name">${result.name}</span><span class="lost-damage-value">-${formatNumber(lostDamage)}</span></li>`;
            });
            html += '</ul>';
        }

        resultDiv.innerHTML = html;
    }

    function generateResistancesHtml(monster) {
        if (!monster) return '';

        const elementOrder = ['physical', 'holy', 'death', 'earth', 'fire', 'ice', 'energy'];
        const elementIcons = {
            physical: 'images/elementos/Fisico.png',
            holy: 'images/elementos/Dazzled_Icon.gif',
            death: 'images/elementos/Cursed_Icon.gif',
            earth: 'images/elementos/Poisoned_Icon.gif',
            fire: 'images/elementos/Burning_Icon.gif',
            ice: 'images/elementos/Freezing_Icon.gif',
            energy: 'images/elementos/Electrified_Icon.gif'
        };
        
        const colorMap = {
            green: '#27ae60',
            yellow: '#f1c40f',
            red: '#c0392b',
            white: '#a0937d'
        };

        let resistanceItemsHtml = '';
        elementOrder.forEach(element => {
            const multiplier = getDamageMultiplier(element, monster);
            const percentage = Math.round(multiplier * 100);
            
            let color = colorMap.white;
            if (percentage >= 101) {
                color = colorMap.green;
            } else if (percentage >= 70 && percentage <= 99) {
                color = colorMap.yellow;
            } else if (percentage <= 69) {
                color = colorMap.red;
            }

            resistanceItemsHtml += `
                <div class="resistance-item">
                    <img src="${elementIcons[element]}" title="${element}" alt="${element}">
                    <div class="resistance-bar-container">
                        <div class="resistance-bar" style="width: ${percentage}%; background-color: ${color};"></div>
                        <span>${percentage}%</span>
                    </div>
                </div>
            `;
        });

        return `
            <fieldset class="resistance-fieldset">
                <legend>Resistências</legend>
                <div class="resistance-grid">${resistanceItemsHtml}</div>
            </fieldset>
        `;
    }

    function runIndividualAnalysis() {
        if (!modeIndividualBtn.classList.contains('active')) return;

        const playerStats = getPlayerStats();
        const selectedCharms = getSelectedCharms();
        
        if (selectedCharms.length === 0 || !currentMonsterData) {
        resultDiv.innerHTML = '';
        resultDiv.classList.remove('individual-result'); // Remova a classe quando o container está vazio
        return;
        }

        const selectedNames = selectedCharms.map(c => c.name);
        const optionalMissing = [];
        if ((selectedNames.includes('Low Blow') || selectedNames.includes('Savage Blow')) && playerStats.level <= 0) {
            optionalMissing.push("Para calcular charms de crítico, preencha o <b>Level</b>");
        }
        if (selectedNames.includes('Overpower') && playerStats.hp <= 0) {
            optionalMissing.push("Para calcular <b>Overpower</b>, preencha o <b>Max HP</b>");
        }
        if (selectedNames.includes('Overflux') && playerStats.mana <= 0) {
            optionalMissing.push("Para calcular <b>Overflux</b>, preencha a <b>Max Mana</b>");
        }

        if (optionalMissing.length > 0) {
            resultDiv.innerHTML = `<div style="text-align: center; color: #a0937d; padding-top: 5px;">${optionalMissing.join('<br>')}</div>`;
            return;
        }
        
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
                } else {
                    viableResults.push(result);
                }
            } else {
                viableResults.push(result);
            }
        });

        viableResults.sort((a, b) => b.bonusDamage - a.bonusDamage);
        inviableResults.sort((a, b) => (b.potentialDamage - b.bonusDamage) - (a.potentialDamage - a.bonusDamage));

        displayIndividualResults({ viable: viableResults, inviable: inviableResults });
        window.runIndividualAnalysis = runIndividualAnalysis;
    }
    
    function selectMonster(name) {
        monsterSearchInput.value = name;
        searchResultsDiv.style.display = 'none';
        currentMonsterData = allMonsters.find(m => m.name.toLowerCase() === name.toLowerCase());
        
        if (currentMonsterData) {
            const resistancesHTML = generateResistancesHtml(currentMonsterData);
            selectedMonsterDisplay.innerHTML = `
                ${resistancesHTML}
                <img id="selectedMonsterImage" src="${currentMonsterData.image_url}" alt="${currentMonsterData.name}">
                <h3 id="selectedMonsterName">${currentMonsterData.name}</h3>
            `;
            selectedMonsterDisplay.style.display = 'flex';
            clearSearchBtn.style.display = 'block';
        }
        runIndividualAnalysis(); 
    }

    function resetSelection() {
        monsterSearchInput.value = '';
        currentMonsterData = null;
        selectedMonsterDisplay.style.display = 'none';
        clearSearchBtn.style.display = 'none';
        searchResultsDiv.style.display = 'none';
        runIndividualAnalysis(); 
    }

    const charmNames = Object.keys(charmsData).sort();
    charmNames.forEach(charmName => {
        const charmItem = document.createElement('div');
        charmItem.className = 'charm-item';
        charmItem.innerHTML = `<input type="checkbox" id="charm-check-${charmName}" value="${charmName}">
            <label for="charm-check-${charmName}">${charmName}</label>
            <div class="tier-selector">
                <button data-tier="0" class="tier-btn active">Tier 1</button>
                <button data-tier="1" class="tier-btn">Tier 2</button>
                <button data-tier="2" class="tier-btn">Tier 3</button>
            </div>`;
        charmSelectionGrid.appendChild(charmItem);
    });

    charmSelectionGrid.addEventListener('click', (event) => {
        if (event.target.type === 'checkbox') {
            const tierSelector = event.target.closest('.charm-item').querySelector('.tier-selector');
            tierSelector.classList.toggle('visible', event.target.checked);
        }
        if (event.target.classList.contains('tier-btn')) {
            const buttons = event.target.parentElement.querySelectorAll('.tier-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }
        runIndividualAnalysis();
    });

    ['level', 'maxHp', 'maxMana'].forEach(id => page.querySelector(`#${id}`).addEventListener('input', runIndividualAnalysis));
    
    monsterSearchInput.addEventListener('input', () => {
        const query = monsterSearchInput.value.toLowerCase();
        searchResultsDiv.innerHTML = '';

        if (!query) {
            searchResultsDiv.style.display = 'none';
            if (currentMonsterData) { 
               resetSelection();
            }
            return;
        }
        
        if (!allMonsters) {
            console.error("A lista de monstros (allMonsters) não foi carregada.");
            return;
        }

        const filtered = allMonsters.filter(m => m.name.toLowerCase().includes(query) && m.hp > 0);
        filtered.slice(0, 50).forEach(monster => {
            const monsterDiv = document.createElement('div');
            monsterDiv.innerHTML = `<img src="${monster.image_url}" alt="${monster.name}"> ${monster.name}`;
            monsterDiv.onclick = () => selectMonster(monster.name);
            searchResultsDiv.appendChild(monsterDiv);
        });
        searchResultsDiv.style.display = 'block';
    });
    
    clearSearchBtn.addEventListener('click', () => {
        resetSelection();
        monsterSearchInput.focus();
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResultsDiv.style.display = 'none';
        }
    });

    monsterSearchInput.placeholder = "Digite para buscar um monstro...";
});