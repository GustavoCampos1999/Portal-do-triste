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
    const huntLogTextarea = page.querySelector('#hunt-log');
    const resultDiv = page.querySelector('#result');
    const modeHuntBtn = page.querySelector('#mode-hunt-btn');
    const allMonsters = window.allMonstersData;

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

    function displayHuntResults(data) {
        let html = '';
        if (data && data.length > 0) {
            resultDiv.style.height = 'auto';
            html += `<h4>Charms recomendado:</h4>`;
            html += `<ul class="ranking-list">`;

            data.forEach(monster => {
                html += `<li style="display: flex; justify-content: center; align-items: center;">`;
                
                html += `<div class="hunt-col-monster">
                            <img class="hunt-monster-image" src="${monster.monsterData.image_url}" alt="${monster.monsterName}">
                            <span class="hunt-monster-name">${monster.count}x ${monster.monsterName}</span>
                         </div>`;
                
                html += `<div class="hunt-col-charm">`;

                const charm = monster.bestCharm;
                const bonus = charm.totalBonus;

                if (charm.isViable) {
                    const sign = bonus > 0 ? '+' : ''; 
                    const colorClass = bonus > 0 ? 'damage-value' : ''; 
                    html += `<strong class="charm-name">${charm.name}</strong>
                             <span class="${colorClass}"> ${sign}${formatNumber(bonus)}</span>`;
                } else {
                    const lostDamage = charm.potentialBonus - bonus;
                    html += `<strong class="charm-name">${charm.name}</strong>
                             <span class="lost-damage-value"> -${formatNumber(lostDamage)}</span>`;
                }

                html += `</div>`;
                html += `</li>`;
            });

            html += '</ul>';
        } else {
            resultDiv.style.height = '50px';
            resultDiv.innerHTML = '';
        }
        resultDiv.innerHTML = html;
    }

    // Encontre a função 'runHuntAnalysis' e substitua-a inteiramente por esta:
// Encontre a função 'runHuntAnalysis' e substitua-a inteiramente por esta:
function runHuntAnalysis() {
    if (!modeHuntBtn.classList.contains('active')) return;

    const playerStats = getPlayerStats();
    const selectedCharms = getSelectedCharms();
    const huntLog = huntLogTextarea.value;

    if (!huntLog.trim() || selectedCharms.length === 0) {
        displayHuntResults(null);
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
        // A LINHA ABAIXO FOI ADICIONADA PARA CORRIGIR A ALTURA
        resultDiv.style.height = 'auto'; 
        resultDiv.innerHTML = `<div style="text-align: center; color: #a0937d; padding: 20px 0;">${optionalMissing.join('<br>')}</div>`;
        return;
    }
    
    const parseHuntLog = (log) => {
        const killedList = [];
        const monsterRegex = /(\d+)x\s+([a-z\s'-]+)/gi;
        let match;
        while ((match = monsterRegex.exec(log)) !== null) {
            killedList.push({ count: parseInt(match[1]), name: match[2].trim().toLowerCase() });
        }
        return killedList;
    };

    const killedMonsters = parseHuntLog(huntLog);
    if (killedMonsters.length === 0) {
        displayHuntResults(null);
        return;
    }

    const allPossibilities = [];
    killedMonsters.forEach(killedMonster => {
        const monsterData = allMonsters.find(m => m.name.toLowerCase() === killedMonster.name);
        if (monsterData) {
            selectedCharms.forEach(charm => {
                const bonusPerKill = calculateBonusDamage({data: charmsData[charm.name]}, charm.tier, monsterData, playerStats);
                const totalBonus = bonusPerKill * killedMonster.count;

                const possibility = {
                    monsterName: monsterData.name,
                    charmName: charm.name,
                    totalBonusDamage: totalBonus,
                    isViable: true,
                    potentialBonus: totalBonus
                };

                const charmInfo = charmsData[charm.name];
                if (charmInfo && charmInfo.type === 'elemental_hp') {
                    const multiplier = getDamageMultiplier(charmInfo.element, monsterData);
                    if (multiplier < 0.3) {
                        possibility.isViable = false;
                        const potentialBonusPerKill = calculateBonusDamage({data: charmInfo}, charm.tier, monsterData, playerStats, true);
                        possibility.potentialBonus = potentialBonusPerKill * killedMonster.count;
                    }
                }
                allPossibilities.push(possibility);
            });
        }
    });
    
    const viablePossibilities = allPossibilities.filter(p => p.isViable);
    viablePossibilities.sort((a, b) => b.totalBonusDamage - a.totalBonusDamage);

    const finalAssignments = [];
    const usedMonsters = new Set();
    const usedCharms = new Set();
    
    viablePossibilities.forEach(p => {
        if (!usedMonsters.has(p.monsterName) && !usedCharms.has(p.charmName)) {
            finalAssignments.push({
                monsterName: p.monsterName,
                bestCharm: { name: p.charmName, totalBonus: p.totalBonusDamage, isViable: true }
            });
            usedMonsters.add(p.monsterName);
            usedCharms.add(p.charmName);
        }
    });

    killedMonsters.forEach(km => {
        const monsterData = allMonsters.find(m => m.name.toLowerCase() === km.name);
        if (monsterData && !usedMonsters.has(monsterData.name)) {
            const bestOverallOption = allPossibilities
                .filter(p => p.monsterName === monsterData.name && !usedCharms.has(p.charmName))
                .sort((a, b) => b.totalBonusDamage - a.totalBonusDamage)[0];

            if (bestOverallOption) {
                 finalAssignments.push({
                    monsterName: monsterData.name,
                    bestCharm: { 
                        name: bestOverallOption.charmName, 
                        totalBonus: bestOverallOption.totalBonusDamage,
                        isViable: bestOverallOption.isViable,
                        potentialBonus: bestOverallOption.potentialBonus
                    }
                });
                usedMonsters.add(monsterData.name);
                usedCharms.add(bestOverallOption.charmName);
            }
        }
    });
    
    const monsterDisplayData = [];
    finalAssignments.forEach(assignment => {
        const monsterData = allMonsters.find(m => m.name === assignment.monsterName);
        const killedMonster = killedMonsters.find(km => km.name === assignment.monsterName.toLowerCase());
        if (monsterData && killedMonster) {
            monsterDisplayData.push({
                monsterName: monsterData.name,
                monsterData: monsterData,
                count: killedMonster.count,
                bestCharm: assignment.bestCharm
            });
        }
    });

    monsterDisplayData.sort((a, b) => {
        const indexA = killedMonsters.findIndex(km => km.name === a.monsterName.toLowerCase());
        const indexB = killedMonsters.findIndex(km => km.name === b.monsterName.toLowerCase());
        return indexA - indexB;
    });

    displayHuntResults(monsterDisplayData);
}
    
    huntLogTextarea.addEventListener('input', runHuntAnalysis);
    charmSelectionGrid.addEventListener('click', runHuntAnalysis);
    ['level', 'maxHp', 'maxMana'].forEach(id => page.querySelector(`#${id}`).addEventListener('input', runHuntAnalysis));
    modeHuntBtn.addEventListener('click', runHuntAnalysis);
});