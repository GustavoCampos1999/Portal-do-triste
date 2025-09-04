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
    
    function calculateBonusDamage(charm, tier, monster, playerStats) {
        let bonusDamage = 0;
        const charmData = charm.data;
        if (!charmData) return 0;
        switch (charmData.type) {
            case 'elemental_hp': {
                const procChance = charmData.chance[tier] / 100;
                const baseProcDamage = monster.hp * charmData.damageMultiplier;
                const damageMultiplier = getDamageMultiplier(charmData.element, monster);
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
        if (data && data.totalDamage > 0) {
            resultDiv.style.height = 'auto';
            html += `
            <div class="recommendation-box">
                <p>Aumento de Dano Total na Hunt:</p>
                <p class="charm-name" style="font-size: 1.8em;"><span class="damage-value">+${formatNumber(data.totalDamage)}</span></p>
            </div>
            <h4>Configuração Otimizada de Charms:</h4>
            <ul class="ranking-list">`;
            data.optimized.forEach(item => {
                html += `
                    <li>
                        <span>${item.monsterName}</span>
                        <span class="charm-name" style="font-size: 1em;">${item.bestCharm} (+${formatNumber(item.bonusDamage)})</span>
                    </li>`;
            });
            html += '</ul>';
        } else {
            resultDiv.style.height = '50px';
        }
        resultDiv.innerHTML = html;
    }
 
    function runHuntAnalysis() {
        if (!modeHuntBtn.classList.contains('active')) return;

        const playerStats = getPlayerStats();
        const selectedCharms = getSelectedCharms();
        const huntLog = huntLogTextarea.value;

        if (!huntLog.trim() || selectedCharms.length === 0) {
            displayHuntResults(null);
            return;
        }
        
        const needsPlayerStats = selectedCharms.some(c => c.data && ['player_proc', 'crit_chance', 'crit_damage'].includes(c.data.type));
        if (needsPlayerStats && playerStats.level <= 0) {
            resultDiv.style.height = 'auto';
            resultDiv.innerHTML = `<p style="text-align: center; color: #a0937d; padding-top: 5px;">Para calcular com charms de crítico/jogador, preencha seus atributos.</p>`;
            return;
        }

        const parseHuntLog = (log) => {
            const killedList = [];
            const killedSection = log.split(/killed monsters:/i)[1];
            if (!killedSection) return [];
            const monsterRegex = /(\d+)x\s+([a-z\s'-]+)/gi;
            let match;
            while ((match = monsterRegex.exec(killedSection)) !== null) {
                killedList.push({ count: parseInt(match[1]), name: match[2].trim().toLowerCase() });
            }
            return killedList;
        };

        const killedMonsters = parseHuntLog(huntLog);
        if (killedMonsters.length === 0) {
            displayHuntResults(null);
            return;
        }

        let allPossibilities = [];
        killedMonsters.forEach(killedMonster => {
            const monsterData = allMonsters.find(m => m.name.toLowerCase() === killedMonster.name);
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
        
        displayHuntResults({ optimized: finalAssignments, totalDamage: totalDamageIncrease });
    }
    
    huntLogTextarea.addEventListener('input', runHuntAnalysis);
    charmSelectionGrid.addEventListener('click', runHuntAnalysis);
    ['level', 'maxHp', 'maxMana'].forEach(id => page.querySelector(`#${id}`).addEventListener('input', runHuntAnalysis));
    modeHuntBtn.addEventListener('click', runHuntAnalysis);
});