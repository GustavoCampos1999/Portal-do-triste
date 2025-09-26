document.addEventListener('DOMContentLoaded', () => {
      const charmsData = {
        "Curse": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'death', icon: 'images/charms/Curse_Icon.gif' },
        "Divine Wrath": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'holy', icon: 'images/charms/Divine_Wrath_Icon.gif' },
        "Enflame": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'fire', icon: 'images/charms/Enflame_Icon.gif' },
        "Freeze": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'ice', icon: 'images/charms/Freeze_Icon.gif' },
        "Poison": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'earth', icon: 'images/charms/Poison_Icon.gif' },
        "Wound": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'physical', icon: 'images/charms/Wound_Icon.gif' },
        "Zap": { type: 'elemental_hp', chance: [5, 10, 11], damageMultiplier: 0.05, element: 'energy', icon: 'images/charms/Zap_Icon.gif' },
        "Low Blow": { type: 'crit_chance', bonus: [4, 8, 9], icon: 'images/charms/Low_Blow_Icon.gif' },
        "Savage Blow": { type: 'crit_damage', bonus: [20, 40, 44], icon: 'images/charms/Savage_Blow_Icon.gif' },
        "Overpower": { type: 'player_proc', chance: [5, 10, 11], damageMultiplier: 0.05, basis: 'hp', icon: 'images/charms/Overpower_Icon.gif' },
        "Overflux": { type: 'player_proc', chance: [5, 10, 11], damageMultiplier: 0.025, basis: 'mana', icon: 'images/charms/Overflux_Icon.gif' }
    };

    const page = document.getElementById('page-calculadora');
    if (!page) return;

    const charmSelectionGrid = page.querySelector('#charm-selection-grid');
    const vocationSelect = page.querySelector('#vocation');
    
    let activePresetName = null;
    let hasChanges = false;
    let presetsData = {}; 

    window.getPlayerStats = function() {
        const levelInput = page.querySelector('#level').value;
        const level = parseFloat(levelInput) || 0;
        const skillInput = page.querySelector('#skillLevel').value;
        const skill = parseFloat(skillInput) || 0;
        const vocation = vocationSelect.value;
        const finalLevel = levelInput === '' ? 0 : level;
        const finalSkill = skillInput === '' ? 0 : skill;
        const hpValue = page.querySelector('#maxHp').value.replace(/\./g, '');
        const manaValue = page.querySelector('#maxMana').value.replace(/\./g, '');
        let calculatedBaseDamage = 0;
        switch(vocation) {
            case 'knight': calculatedBaseDamage = (finalLevel * 0.3) + (finalSkill * 4.8); break;
            case 'paladin': calculatedBaseDamage = (finalLevel * 0.4) + (finalSkill * 3.2); break;
			case 'monk': calculatedBaseDamage = (finalLevel * 0.4) + (finalSkill * 3.2); break;
            case 'sorcerer': calculatedBaseDamage = (finalLevel * 0.2) + (finalSkill * 6.5); break;
			case 'druid': calculatedBaseDamage = (finalLevel * 0.2) + (finalSkill * 6.5); break;
        }
        return {
            hp: parseFloat(hpValue) || 0, mana: parseFloat(manaValue) || 0,
            level: finalLevel, skill: finalSkill, vocation: vocation,
            baseDamage: (finalSkill > 0 ? calculatedBaseDamage + 50 : 0), baseCritChance: 0.10
        };
    };
    window.getSelectedCharms = function() {
        const selected = [];
        const activeCharms = charmSelectionGrid.querySelectorAll('.charm-icon-container.active');
        activeCharms.forEach(charmDiv => {
            const charmName = charmDiv.dataset.charmName;
            const activeTierButton = charmDiv.querySelector('.tier-btn.active');
            selected.push({
                name: charmName,
                tier: activeTierButton ? parseInt(activeTierButton.dataset.tier) : 0,
                data: charmsData[charmName]
            });
        });
        return selected;
    };
    window.calculateBonusDamage = function(charm, tier, monster, playerStats, ignoreResistance = false) {
        let bonusDamage = 0;
        const charmData = charm.data;
        if (!charmData) return 0;
        switch (charmData.type) {
            case 'elemental_hp': {
                if (playerStats.level <= 0) return 0;
                const procChance = charmData.chance[tier] / 100;
                const baseProcDamage = monster.hp * charmData.damageMultiplier;
                const cappedDamage = Math.min(baseProcDamage, playerStats.level * 2);
                const damageMultiplier = ignoreResistance ? 1.0 : getDamageMultiplier(charmData.element, monster);
                bonusDamage = procChance * (cappedDamage * damageMultiplier);
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
                if (playerStats.skill <= 0) return 0;
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
    };
    window.getDamageMultiplier = function(element, monster) {
        if (!monster || !monster.damageTypes) return 1.0;
        const damageType = monster.damageTypes.find(dt => dt.type === element);
        return damageType ? damageType.multiplier : 1.0;
    };
    window.formatNumber = function(num) {
        if (num >= 1000) return (num / 1000).toFixed(1).replace('.', ',') + 'k';
        if (num < 10 && num > 0) return num.toFixed(2);
        return num.toFixed(0);
    };

    const charmNames = Object.keys(charmsData).sort();
     charmNames.forEach(charmName => {
        const charmInfo = charmsData[charmName];
        const charmElement = document.createElement('div');
        charmElement.className = 'charm-icon-container';
        charmElement.dataset.charmName = charmName; 

        charmElement.innerHTML = `
            <img src="${charmInfo.icon}" alt="${charmName}" class="charm-icon">
            <span class="charm-icon-label">${charmName}</span>
            <div class="tier-selector">
                <button data-tier="0" class="tier-btn active">Tier 1</button>
                <button data-tier="1" class="tier-btn">Tier 2</button>
                <button data-tier="2" class="tier-btn">Tier 3</button>
            </div>
        `;
        charmSelectionGrid.appendChild(charmElement);
    });

    const db = firebase.firestore();
    const auth = firebase.auth();
    const savePresetBtn = page.querySelector('#savePresetBtn');
    const savedPresetsList = page.querySelector('#saved-presets-list');
    const clearAllBtn = page.querySelector('#clearAllBtn');
    const presetsLoggedInDiv = page.querySelector('#presets-logged-in');
    const presetsLoggedOutDiv = page.querySelector('#presets-logged-out');

    const savePresetModal = document.getElementById('save-preset-modal');
    const saveModalTitle = document.getElementById('save-modal-title');
    const saveModalText = document.getElementById('save-modal-text');
    const savePresetNameInput = document.getElementById('save-preset-name-input');
    const savePresetOptions = document.getElementById('save-preset-options');
    const savePresetConfirmBtn = document.getElementById('save-preset-confirm-btn');
    const saveAsNewBtn = document.getElementById('save-as-new-btn');
    const savePresetCancelBtn = document.getElementById('save-preset-cancel-btn');
    const savePresetError = document.getElementById('save-preset-error');

    const confirmModal = document.getElementById('confirm-modal');
    const confirmModalTitle = document.getElementById('confirm-modal-title');
    const confirmModalText = document.getElementById('confirm-modal-text');
    const confirmModalConfirmBtn = document.getElementById('confirm-modal-confirm-btn');
    const confirmModalCancelBtn = document.getElementById('confirm-modal-cancel-btn');

    let unsubscribeFromPresets = null;
    let activeConfirmationButton = null;

    document.addEventListener('click', (event) => {
        if (activeConfirmationButton && !activeConfirmationButton.contains(event.target)) {
            activeConfirmationButton.classList.remove('confirm-delete');
            activeConfirmationButton = null;
        }
    });

    function showConfirmModal(title, text, onConfirmCallback) {
        confirmModalTitle.textContent = title;
        confirmModalText.textContent = text;
        confirmModal.classList.remove('hidden');

        confirmModalConfirmBtn.onclick = () => {
            confirmModal.classList.add('hidden');
            onConfirmCallback();
        };

        confirmModalCancelBtn.onclick = () => {
            confirmModal.classList.add('hidden');
        };
    }

    function loadUserPresets(uid) {
        if (unsubscribeFromPresets) unsubscribeFromPresets();
        unsubscribeFromPresets = db.collection('users').doc(uid).collection('presets')
          .onSnapshot(snapshot => {
              presetsData = {}; 
              savedPresetsList.innerHTML = ''; 
              if (snapshot.empty) {
                  savedPresetsList.innerHTML = '<p style="font-size: 0.9em; color: #a0937d; margin: 0; width: 100%; text-align: center;">Nenhum preset salvo.</p>';
                  return;
              }
              snapshot.forEach(doc => {
                  const preset = doc.data();
                  presetsData[preset.name] = preset; 
                  
                  const presetTag = document.createElement('div');
                  presetTag.className = 'preset-tag';
                  if (preset.name === activePresetName && !hasChanges) {
                    presetTag.classList.add('active');
                  }
                  presetTag.dataset.presetId = preset.name;
                  presetTag.innerHTML = `
                      <span class="preset-name">${preset.name}</span>
                      <span class="preset-delete-btn" role="button" tabindex="0" title="Deletar preset"></span>
                  `;
                  savedPresetsList.appendChild(presetTag);
              });
          }, error => {
              console.error("Erro ao carregar presets:", error);
              savedPresetsList.innerHTML = '<p class="preset-status-message error">Erro ao carregar presets.</p>';
          });
    }
    
    function openSaveModal(isUpdate = false) {
        savePresetError.textContent = '';
        savePresetConfirmBtn.textContent = 'Salvar';
        savePresetNameInput.style.display = 'block';
        savePresetOptions.classList.add('hidden');
        saveAsNewBtn.classList.add('hidden');


        if (isUpdate && activePresetName) {
            saveModalTitle.textContent = 'Salvar Alterações';
            saveModalText.innerHTML = `Deseja salvar as alterações feitas no preset <strong>"${activePresetName}"</strong>?`;
            savePresetNameInput.value = activePresetName;
            savePresetNameInput.style.display = 'none'; 
            saveAsNewBtn.classList.remove('hidden');
        } else {
            saveModalTitle.textContent = 'Salvar Novo Preset';
            saveModalText.textContent = 'Digite um nome para o seu novo preset.';
            savePresetNameInput.value = '';
        }
        savePresetModal.classList.remove('hidden');
    }

    function closeSaveModal() {
        savePresetModal.classList.add('hidden');
    }

    async function savePreset() {
        const user = auth.currentUser;
        if (!user) return;
        
        let presetName = savePresetNameInput.value.trim();
        if (!presetName) {
            savePresetError.textContent = 'O nome não pode ser vazio.'; return;
        }

        const isUpdating = activePresetName === presetName;
        const isOverwriting = !!presetsData[presetName] && !isUpdating;
        
        if(isOverwriting && savePresetConfirmBtn.textContent !== "Sobrescrever") {
            savePresetOptions.classList.remove('hidden');
            savePresetConfirmBtn.textContent = "Sobrescrever";
            return;
        }

        const selectedCharms = getSelectedCharms().map(c => ({ name: c.name, tier: c.tier }));
        const playerStatsToSave = {
            vocation: page.querySelector('#vocation').value, level: page.querySelector('#level').value,
            skillLevel: page.querySelector('#skillLevel').value, maxHp: page.querySelector('#maxHp').value,
            maxMana: page.querySelector('#maxMana').value
        };

        db.collection('users').doc(user.uid).collection('presets').doc(presetName).set({
            name: presetName, charms: selectedCharms, stats: playerStatsToSave
        }).then(() => {
            let message = isUpdating ? `Preset "${presetName}" atualizado!` : `Preset "${presetName}" salvo!`;
            showNotification(message);
            closeSaveModal();
            
            activePresetName = presetName;
            updateUiForStateChange(false); 
            
            const savedTag = savedPresetsList.querySelector(`.preset-tag[data-preset-id="${presetName}"]`);
            if (savedTag) savedTag.classList.add('active');

        }).catch(error => {
            console.error("Erro ao salvar preset:", error);
            savePresetError.textContent = 'Ocorreu um erro ao salvar.';
        });
    }
    
    function _loadPresetLogic(presetData) {
        clearAll(false); 
        const charmData = presetData.charms || [];
        const stats = presetData.stats || {};
        
        charmData.forEach(charm => {
            const checkbox = charmSelectionGrid.querySelector(`input[value="${charm.name}"]`);
            if (checkbox) {
                checkbox.checked = true;
                const charmItem = checkbox.closest('.charm-item');
                const tierSelector = charmItem.querySelector('.tier-selector');
                tierSelector.classList.add('visible');
                tierSelector.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
                const correctTierBtn = tierSelector.querySelector(`[data-tier="${charm.tier}"]`);
                if(correctTierBtn) correctTierBtn.classList.add('active');
            }
        });
        
        page.querySelector('#vocation').value = stats.vocation || '';
        page.querySelector('#level').value = stats.level || '';
        page.querySelector('#skillLevel').value = stats.skillLevel || '';
        page.querySelector('#maxHp').value = stats.maxHp || '';
        page.querySelector('#maxMana').value = stats.maxMana || '';
        
        activePresetName = presetData.name;
        updateUiForStateChange(false); 
        
        const newActiveTag = savedPresetsList.querySelector(`.preset-tag[data-preset-id="${presetData.name}"]`);
        if (newActiveTag) newActiveTag.classList.add('active');
        
        runAnyAnalysis(); 
    }

    function loadPreset(presetData) {
        if (hasChanges && activePresetName) {
            showConfirmModal(
                'Descartar Alterações?',
                'Você tem alterações não salvas. Deseja continuar e perder suas mudanças?',
                () => { _loadPresetLogic(presetData); }
            );
        } else {
            _loadPresetLogic(presetData);
        }
    }

    function deletePreset(uid, presetId, deleteBtn) {
        if (!deleteBtn.classList.contains('confirm-delete')) {
            if (activeConfirmationButton) {
                activeConfirmationButton.classList.remove('confirm-delete');
            }
            deleteBtn.classList.add('confirm-delete');
            activeConfirmationButton = deleteBtn;
            return;
        }

        db.collection('users').doc(uid).collection('presets').doc(presetId).delete()
        .then(() => {
            showNotification(`Preset "${presetId}" deletado.`);
            if (activePresetName === presetId) clearAll(false);
            activeConfirmationButton = null;
        })
        .catch(error => {
            console.error("Erro ao deletar preset:", error);
            activeConfirmationButton = null;
        });
    }
    
    function clearAll(clearMonster = true) {
    activePresetName = null;
    ['vocation', 'level', 'skillLevel', 'maxHp', 'maxMana'].forEach(id => { page.querySelector(`#${id}`).value = ''; });

    charmSelectionGrid.querySelectorAll('.charm-icon-container.active').forEach(container => {
        container.classList.remove('active');
        const tierSelector = container.querySelector('.tier-selector');
        if (tierSelector) {
            tierSelector.classList.remove('visible');
        }
    });
    
    updateUiForStateChange(false); 

    if (clearMonster && typeof window.resetSelection === 'function') { window.resetSelection(); }
    runAnyAnalysis();
}
    
    function showNotification(message, type = 'success') {
        const container = document.getElementById('notification-container');
        if (!container) return;
        container.textContent = message;
        container.className = `notification ${type}`; 
        container.classList.add('show');
        setTimeout(() => { container.classList.remove('show'); }, 3000);
    }

    function runAnyAnalysis() {
        if (typeof runIndividualAnalysis === 'function' && document.getElementById('mode-individual-btn').classList.contains('active')) {
            runIndividualAnalysis();
        }
        if (typeof runHuntAnalysis === 'function' && document.getElementById('mode-hunt-btn').classList.contains('active')) {
            runHuntAnalysis();
        }
    }
    
  function updateUiForStateChange(hasUnsavedChanges) {
    hasChanges = hasUnsavedChanges;
    if (hasUnsavedChanges) {
        savePresetBtn.classList.remove('hidden');
    } else {
        savePresetBtn.classList.add('hidden');
        document.querySelectorAll('.preset-tag.active').forEach(tag => tag.classList.remove('active'));
    }
}

    function handleUserInputChange() {
        if (!hasChanges) {
            updateUiForStateChange(true);
        }
        runAnyAnalysis();
    }

    window.handleLoggedInUser = (uid) => {
        presetsLoggedInDiv.classList.remove('hidden');
        presetsLoggedOutDiv.classList.add('hidden');
        loadUserPresets(uid);
    };

    window.handleLoggedOutUser = () => {
        if (unsubscribeFromPresets) unsubscribeFromPresets();
        presetsLoggedInDiv.classList.add('hidden');
        presetsLoggedOutDiv.classList.remove('hidden');
        savedPresetsList.innerHTML = '';
        presetsData = {};
        clearAll(true);
    };

    savePresetBtn.addEventListener('click', () => {
        const isUpdating = !!activePresetName && hasChanges;
        openSaveModal(isUpdating);
    });
    
    saveAsNewBtn.addEventListener('click', () => {
        openSaveModal(false); 
    });

    savePresetConfirmBtn.addEventListener('click', savePreset);
    savePresetCancelBtn.addEventListener('click', closeSaveModal);
    clearAllBtn.addEventListener('click', () => clearAll(true));
    
    savedPresetsList.addEventListener('click', (e) => {
        const user = auth.currentUser;
        if (!user) return;

        const target = e.target;
        const tag = target.closest('.preset-tag');
        if (!tag) return;

        const presetId = tag.dataset.presetId;
        const deleteBtn = target.closest('.preset-delete-btn');

        if (deleteBtn) {
            e.stopPropagation();
            deletePreset(user.uid, presetId, deleteBtn);
        } else {
            if (tag.classList.contains('active')) return;
            loadPreset(presetsData[presetId]);
        }
    });
    
   charmSelectionGrid.addEventListener('click', (event) => {
        const target = event.target;
        const charmContainer = target.closest('.charm-icon-container');

        if (target.classList.contains('tier-btn')) {
            const tierSelector = target.parentElement;
            tierSelector.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            handleUserInputChange(); 
            return; 
        }

        if (charmContainer) {
            charmContainer.classList.toggle('active');
            const tierSelector = charmContainer.querySelector('.tier-selector');
            
            if (charmContainer.classList.contains('active')) {
                tierSelector.classList.add('visible');
            } else {
                tierSelector.classList.remove('visible');
            }
            handleUserInputChange(); 
        }
    });
    
    ['vocation', 'level', 'skillLevel', 'maxHp', 'maxMana'].forEach(id => {
        page.querySelector(`#${id}`).addEventListener('input', handleUserInputChange);
    });

      ['level', 'skillLevel', 'maxHp', 'maxMana'].forEach(id => {
        const input = page.querySelector(`#${id}`);
        if (input) {
            input.addEventListener('input', () => {
                input.classList.remove('input-error');
            });
        }
    });
});