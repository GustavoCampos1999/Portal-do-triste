// Arquivo: analise_hunt.js (Versão Final Completa)
document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page-calculadora');
    if (!page) return;

    const charmSelectionGrid = page.querySelector('#charm-selection-grid');
    const huntLogTextarea = page.querySelector('#hunt-log');
    const resultDiv = page.querySelector('#result');
    const modeHuntBtn = page.querySelector('#mode-hunt-btn');
    const allMonsters = window.allMonstersData || [];

    function displayHuntResults(data) {
        let html = '';
        resultDiv.classList.remove('individual-result'); 
        if (data && data.length > 0) {
            resultDiv.style.height = 'auto';
            html += `<h4>Charms recomendado:</h4>`;
            html += `<ul class="ranking-list">`;
            data.forEach(monster => {
                html += `<li style="display: flex; justify-content: center; align-items: center;">`;
                html += `<div class="hunt-col-monster"><img class="hunt-monster-image" src="${monster.monsterData.image_url}" alt="${monster.monsterName}"><span class="hunt-monster-name">${monster.monsterName}</span></div>`;
                html += `<div class="hunt-col-charm">`;
                const charm = monster.bestCharm;
                const bonus = charm.totalBonus;
                if (charm.isViable) {
                    const sign = bonus > 0 ? '+' : '';
                    html += `<strong class="charm-name">${charm.name}</strong> <span class="damage-value">${sign}${formatNumber(bonus)}</span>`;
                } else {
                    const lostDamage = charm.potentialBonus - bonus;
                    html += `<strong class="charm-name">${charm.name}</strong> <span class="lost-damage-value">-${formatNumber(lostDamage)}</span>`;
                }
                html += `</div></li>`;
            });
            html += '</ul>';
        } else {
            resultDiv.style.height = 'auto'; 
            resultDiv.innerHTML = '';
        }
        if(html) { resultDiv.innerHTML = html; }
    }

    window.runHuntAnalysis = function() {
        if (!modeHuntBtn.classList.contains('active')) return;
        const playerStats = getPlayerStats();
        const selectedCharms = getSelectedCharms();
        const huntLog = huntLogTextarea.value;
        if (!huntLog.trim() || selectedCharms.length === 0) { displayHuntResults(null); return; }

        const levelInput = page.querySelector('#level');
        const skillInput = page.querySelector('#skillLevel');
        const hpInput = page.querySelector('#maxHp');
        const manaInput = page.querySelector('#maxMana');

        [levelInput, skillInput, hpInput, manaInput].forEach(el => el.classList.remove('input-error'));

        const selectedNames = selectedCharms.map(c => c.name);
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
        
        if (optionalMissing.length > 0) {
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
        if (killedMonsters.length === 0) { displayHuntResults(null); return; }
        const allPossibilities = [];
        killedMonsters.forEach(killedMonster => {
            const monsterData = allMonsters.find(m => m.name.toLowerCase() === killedMonster.name);
            if (monsterData) {
                selectedCharms.forEach(charm => {
                    const bonusPerKill = calculateBonusDamage(charm, charm.tier, monsterData, playerStats);
                    const totalBonus = bonusPerKill * killedMonster.count;
                    const possibility = {
                        monsterName: monsterData.name, charmName: charm.name,
                        totalBonusDamage: totalBonus, isViable: true, potentialBonus: totalBonus
                    };
                    if (charm.data.type === 'elemental_hp') {
                        const multiplier = getDamageMultiplier(charm.data.element, monsterData);
                        if (multiplier < 0.3) {
                            possibility.isViable = false;
                            const potentialBonusPerKill = calculateBonusDamage(charm, charm.tier, monsterData, playerStats, true);
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
                            name: bestOverallOption.charmName, totalBonus: bestOverallOption.totalBonusDamage,
                            isViable: bestOverallOption.isViable, potentialBonus: bestOverallOption.potentialBonus
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
                    monsterName: monsterData.name, monsterData: monsterData,
                    count: killedMonster.count, bestCharm: assignment.bestCharm
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
});