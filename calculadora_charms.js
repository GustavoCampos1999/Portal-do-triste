document.addEventListener('DOMContentLoaded', () => {

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
    
    const charmSelectionGrid = document.getElementById('charm-selection-grid');
    const modeIndividualBtn = document.getElementById('mode-individual-btn');
    const modeHuntBtn = document.getElementById('mode-hunt-btn');
    const individualAnalyzer = document.getElementById('individual-analyzer');
    const huntAnalyzer = document.getElementById('hunt-analyzer');
    const monsterSearchInput = document.getElementById('monsterSearch');
    const searchResultsDiv = document.getElementById('searchResults');
    const selectedMonsterDisplay = document.getElementById('selectedMonsterDisplay');
    const selectedMonsterImage = document.getElementById('selectedMonsterImage');
    const selectedMonsterName = document.getElementById('selectedMonsterName');
    const calculateBtn = document.getElementById('calculateBtn');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const huntLogTextarea = document.getElementById('hunt-log');
    const analyzeHuntBtn = document.getElementById('analyze-hunt-btn');
    const resultDiv = document.getElementById('result');
    const allMonsters = allMonstersData;
    let currentMonsterData = null;

    function initializeCharms() {
        if (!charmSelectionGrid) return; 
        populateCharmSelection();
        monsterSearchInput.placeholder = "Digite para buscar um monstro...";
    }

    function populateCharmSelection() {
        const charmNames = Object.keys(charmsData).sort();
        
        charmNames.forEach(charmName => {
            const charmItem = document.createElement('div');
            charmItem.className = 'charm-item';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `charm-check-${charmName}`;
            checkbox.value = charmName;
            const label = document.createElement('label');
            label.htmlFor = `charm-check-${charmName}`;
            label.textContent = charmName;
            charmItem.appendChild(checkbox);
            charmItem.appendChild(label);
            const tierSelector = document.createElement('div');
            tierSelector.className = 'tier-selector';
            for (let i = 1; i <= 3; i++) {
                const button = document.createElement('button');
                button.dataset.tier = i - 1;
                button.textContent = `Tier ${i}`;
                button.className = 'tier-btn';
                if (i === 1) button.classList.add('active');
                tierSelector.appendChild(button);
            }
            charmItem.appendChild(tierSelector);
            charmSelectionGrid.appendChild(charmItem);
        });

        charmSelectionGrid.addEventListener('click', (event) => {
            if (event.target.classList.contains('tier-btn')) {
                const buttons = event.target.parentElement.querySelectorAll('.tier-btn');
                buttons.forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');
            }
            if (event.target.type === 'checkbox') {
                const charmItem = event.target.closest('.charm-item');
                const tierSelector = charmItem.querySelector('.tier-selector');
                if (event.target.checked) {
                    tierSelector.classList.add('visible');
                } else {
                    tierSelector.classList.remove('visible');
                }
            }
        });
    }

    modeIndividualBtn.addEventListener('click', () => {
        modeIndividualBtn.classList.add('active');
        modeHuntBtn.classList.remove('active');
        individualAnalyzer.classList.remove('hidden');
        huntAnalyzer.classList.add('hidden');
        resultDiv.innerHTML = '';
    });
    modeHuntBtn.addEventListener('click', () => {
        modeHuntBtn.classList.add('active');
        modeIndividualBtn.classList.remove('active');
        huntAnalyzer.classList.remove('hidden');
        individualAnalyzer.classList.add('hidden');
        resultDiv.innerHTML = '';
    });

    monsterSearchInput.addEventListener('input', () => {
        resetSelection();
        const query = monsterSearchInput.value.toLowerCase();
        searchResultsDiv.innerHTML = '';
        if (!query) { searchResultsDiv.style.display = 'none'; return; }
        const filtered = allMonsters.filter(m => m.name.toLowerCase().includes(query) && m.hp > 0);
        if (filtered.length > 0) {
            filtered.slice(0, 50).forEach(monster => {
                const monsterDiv = document.createElement('div');
                monsterDiv.innerHTML = `<img src="${monster.image_url}" alt="${monster.name}"> ${monster.name}`;
                monsterDiv.onclick = () => selectMonster(monster.name);
                searchResultsDiv.appendChild(monsterDiv);
            });
            searchResultsDiv.style.display = 'block';
        }
    });

    clearSearchBtn.addEventListener('click', () => {
        monsterSearchInput.value = '';
        resetSelection();
        monsterSearchInput.focus();
    });

    function selectMonster(name) {
        monsterSearchInput.value = name;
        searchResultsDiv.style.display = 'none';
        currentMonsterData = allMonsters.find(m => m.name.toLowerCase() === name.toLowerCase());
        if (currentMonsterData) {
            selectedMonsterImage.src = currentMonsterData.image_url;
            selectedMonsterName.textContent = currentMonsterData.name;
            selectedMonsterDisplay.style.display = 'block';
            clearSearchBtn.style.display = 'block';
        }
        validateInputs();
    }
    
    function getPlayerStats() {
        const level = parseFloat(document.getElementById('level').value) || 0;
        const baseDamage = (level * 2.5) + 50; 
        const baseCritChance = 0.10;
        return {
            hp: parseFloat(document.getElementById('maxHp').value),
            mana: parseFloat(document.getElementById('maxMana').value),
            level: level,
            baseDamage: baseDamage,
            baseCritChance: baseCritChance
        };
    }
    
    function getSelectedCharms() {
        const selected = [];
        const checkedBoxes = charmSelectionGrid.querySelectorAll('input[type="checkbox"]:checked');
        checkedBoxes.forEach(cb => {
            const charmName = cb.value;
            const charmData = charmsData[charmName];
            const charmItem = cb.closest('.charm-item');
            const activeTierButton = charmItem.querySelector('.tier-btn.active');
            selected.push({
                name: charmName,
                tier: parseInt(activeTierButton.dataset.tier),
                data: charmData
            });
        });
        return selected;
    }

    function calculateBonusDamage(charm, tier, monster, playerStats) {
        let bonusDamage = 0;
        const charmData = charm.data;
        const getDamageMultiplier = (element) => {
            const damageType = monster.damageTypes.find(dt => dt.type === element);
            return damageType ? damageType.multiplier : 1.0;
        };

        switch (charmData.type) {
            case 'elemental_hp': {
                const procChance = charmData.chance[tier] / 100;
                const baseProcDamage = monster.hp * charmData.damageMultiplier;
                const damageMultiplier = getDamageMultiplier(charmData.element);
                bonusDamage = procChance * (baseProcDamage * damageMultiplier);
                break;
            }
            case 'player_proc': {
                const procChance = charmData.chance[tier] / 100;
                const playerBasis = (charmData.basis === 'mana') ? playerStats.mana : playerStats.hp;
                const procCap = monster.hp * 0.08;
                const potentialDamage = playerBasis * charmData.damageMultiplier;
                const actualDamage = Math.min(potentialDamage, procCap);
                bonusDamage = procChance * actualDamage;
                break;
            }
            case 'crit_chance': {
                const critChanceBonus = charmData.bonus[tier] / 100;
                bonusDamage = playerStats.baseDamage * critChanceBonus * 0.5;
                break;
            }
            case 'crit_damage': {
                const critDamageBonus = charmData.bonus[tier] / 100;
                bonusDamage = playerStats.baseDamage * playerStats.baseCritChance * critDamageBonus;
                break;
            }
        }
        return bonusDamage < 0 ? 0 : bonusDamage;
    }

    calculateBtn.addEventListener('click', () => {
        const playerStats = getPlayerStats();
        const selectedCharms = getSelectedCharms();
        if (!currentMonsterData || !playerStats.level || selectedCharms.length === 0) {
            alert("Por favor, preencha seu level, HP, Mana, selecione um monstro e escolha pelo menos um charm.");
            return;
        }
        let results = [];
        selectedCharms.forEach(charm => {
            const bonusDamage = calculateBonusDamage(charm, charm.tier, currentMonsterData, playerStats);
            results.push({ name: charm.name, bonusDamage: bonusDamage });
        });
        results.sort((a, b) => b.bonusDamage - a.bonusDamage);
        displayResults({ individual: results, context: `vs ${currentMonsterData.name}` });
    });

    analyzeHuntBtn.addEventListener('click', () => {
        const playerStats = getPlayerStats();
        const selectedCharms = getSelectedCharms();
        const huntLog = huntLogTextarea.value;
        if (!playerStats.level || selectedCharms.length === 0 || !huntLog) {
            alert("Por favor, preencha seu level, HP, Mana, escolha seus charms e cole o log da hunt.");
            return;
        }
        const killedMonsters = parseHuntLog(huntLog);
        if (killedMonsters.length === 0) {
            alert("Não foram encontrados monstros na seção 'Killed Monsters:' do seu log.");
            return;
        }
        let allPossibilities = [];
        killedMonsters.forEach(killedMonster => {
            const monsterData = allMonsters.find(m => m.name.toLowerCase() === killedMonster.name.toLowerCase());
            if (monsterData) {
                selectedCharms.forEach(charm => {
                    const bonusPerKill = calculateBonusDamage(charm, charm.tier, monsterData, playerStats);
                    const totalBonus = bonusPerKill * killedMonster.count;
                    allPossibilities.push({
                        monsterName: monsterData.name,
                        charmName: charm.name,
                        totalBonusDamage: totalBonus
                    });
                });
            }
        });
        allPossibilities.sort((a, b) => b.totalBonusDamage - a.totalBonusDamage);
        const finalAssignments = [];
        const usedMonsters = new Set();
        const usedCharms = new Set();
        let totalDamageIncrease = 0;
        allPossibilities.forEach(p => {
            if (!usedMonsters.has(p.monsterName) && !usedCharms.has(p.charmName)) {
                finalAssignments.push({
                    monsterName: p.monsterName,
                    bestCharm: p.charmName,
                    bonusDamage: p.totalBonusDamage
                });
                totalDamageIncrease += p.totalBonusDamage;
                usedMonsters.add(p.monsterName);
                usedCharms.add(p.charmName);
            }
        });
        displayResults({ optimized: finalAssignments, totalDamage: totalDamageIncrease, context: "para esta Hunt" });
    });
    
    function parseHuntLog(log) {
        const killedList = [];
        const killedSection = log.split(/killed monsters:/i)[1];
        if (!killedSection) return [];
        const monsterRegex = /(\d+)x\s+([a-z\s'-]+)/gi;
        let match;
        while ((match = monsterRegex.exec(killedSection)) !== null) {
            killedList.push({ count: parseInt(match[1]), name: match[2].trim() });
        }
        return killedList;
    }

    function displayResults(data) {
        let html = '';
        if (data.individual) {
            html += `<h3>Análise de Charms ${data.context}</h3>`;
            const bestOption = data.individual[0];
            if (bestOption) {
                html += `
                    <div class="recommendation-box">
                        <p>Melhor Opção:</p>
                        <p class="charm-name">${bestOption.name}</p>
                        <p>Aumento de Dano Médio por Hit: <span class="damage-value">+${bestOption.bonusDamage.toFixed(2)}</span></p>
                    </div>
                `;
            }
            html += `<h4>Ranking Completo:</h4><ul class="ranking-list">`;
            data.individual.forEach(result => {
                html += `
                    <li>
                        <span>${result.name}</span>
                        <span class="damage-value">+${result.bonusDamage.toFixed(2)}</span>
                    </li>
                `;
            });
            html += '</ul>';
        } else if (data.optimized) {
            html += `
                <div class="recommendation-box">
                    <p>Aumento de Dano Total na Hunt:</p>
                    <p class="charm-name" style="font-size: 1.8em;"><span class="damage-value">+${data.totalDamage.toFixed(0)}</span></p>
                </div>
                <h4>Alocação Otimizada de Charms:</h4>
                <ul class="ranking-list">
            `;
            data.optimized.forEach(item => {
                html += `
                    <li>
                        <span>${item.monsterName}</span>
                        <span class="charm-name" style="font-size: 1em;">${item.bestCharm} (+${item.bonusDamage.toFixed(0)})</span>
                    </li>
                `;
            });
            html += '</ul>';
        }
        resultDiv.innerHTML = html;
    }
    
    function resetSelection() {
        currentMonsterData = null;
        selectedMonsterDisplay.style.display = 'none';
        clearSearchBtn.style.display = 'none';
        resultDiv.innerHTML = '';
        validateInputs();
    }

    function validateInputs() {
        const level = parseFloat(document.getElementById('level').value) || 0;
        calculateBtn.disabled = !(level > 0 && currentMonsterData);
    }
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResultsDiv.style.display = 'none';
        }
    });

    document.querySelectorAll('#individual-analyzer input[type="number"]').forEach(input => {
        input.addEventListener('keyup', validateInputs);
    });

    initializeCharms();
});